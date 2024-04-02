import { MongoClient } from 'mongodb'
const url = "mongodb+srv://jananisri17072003:sri2003@cluster0.8e6mv9i.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

export const client = new MongoClient(url);

export const connectToDatabase = async() => {

    try{
        await client.connect();
        console.log("DB CONNECTION DONE")
    }
    catch(error){
        console.log(error)
    }
}