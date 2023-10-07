const ObjectId = require('mongodb').ObjectId
const mongodb = require('../db/connect');

const getData = async (req, res, next) => {
  const result = await mongodb.getDb().db().collection('contacts').find({})
    result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
  })  
}


const getDataById = async (req, res, next) => {
  const id = new ObjectId(req.params.id)
  const result = await mongodb.getDb().db().collection('contacts').find({ _id: id })
    result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists[0]);
  })  
}

const createNewContact = async (req, res, next) => {
  const contact = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    favoriteColor: req.body.favoriteColor,
    birthday: req.body.birthday
  };
const create = await mongodb.getDb().db().collection('contacts').insertOne(contact)
 if(create.acknowledged){
  res.status(201).json(create)
 } else {
  res.status(500).json(create.error || 'Some error ocurred while creating the contact')
 }
}

const updateContact = async (req, res, next) => {
  const getId = req.params.id
  const id = new ObjectId(getId)
  const contact = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    favoriteColor: req.body.favoriteColor,
    birthday: req.body.birthday
  };
  const update = await mongodb.getDb().db().collection('contacts').replaceOne({ _id: id }, contact)
  console.log(update)
  if(update.modifiedCount > 0) {
  res.status(204).send()
  } else {
  res.status(500).json(update.error || 'Some error ocurred while updating the contact')
  }
}

const deleteContact = async (req, res, next) => {
  const getId = req.params.id
  const id = new ObjectId(getId)
  const delContact = await mongodb.getDb().db().collection('contacts').deleteOne({_id: id}) 
  if(delContact){
  res.status(204).send()
  } else {
  res.status(500).json(delContact.error || 'Some error ocurred while deleting the contact')
  }
}



module.exports = {getData, getDataById, createNewContact, updateContact, deleteContact};