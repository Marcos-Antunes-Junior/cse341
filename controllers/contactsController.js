const { ObjectId } = require('mongodb');
const mongodb = require('../db/connect');

const getData = async (req, res, next) => {
  const result = await mongodb.getDb().db().collection('contacts').find()
    result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
  })  
}


const getDataById = async (req, res, next) => {
  const getId = req.params.id
  const id = new ObjectId(getId)
  const result = await mongodb.getDb().db().collection('contacts').find({ _id: id })
    result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists[0]);
  })  
}




module.exports = {getData, getDataById};