
const { MongoClient } = require('mongodb');
const env = require("dotenv").config()

async function main() {
    
    const uri = process.env.DATABASE_URI;

    const client = new MongoClient(uri);
    
    try{
    await client.connect();
    await listDatabases(client);
    } catch (e) {
        console.error(e)
    } finally {
        await client.close();
    }
}

main().catch(console.error);

async function listDatabases(client) {
    const databaseList = await client.db().admin().listDatabases();
    console.log("Databases")
    databaseList.databases.forEach(db => 
     console.log(`-${db.name}`));
}

