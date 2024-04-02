import { client, connectToDatabase } from "../backend/db.js"

import axios from "axios"

export const getUser = async(req,res)=>
{
    await connectToDatabase();
    try{

        await connectToDatabase();

        const database = client.db('users');
        const coll = database.collection('user_info');
        
         const updateResult = await coll.updateOne({ rating: 4.4 }, {$set: { name: "Chocolate"}}, { upsert: true});
         console.log(updateResult);
          
          const deleteResult = await coll.deleteOne({ name: "Beef and Broccoli Stir-Fry"});
          console.log(deleteResult);
          res.send("hello")
            

    }catch(error){
        console.log(error);
        res.send(error)
    }          
}

export const createUser = async(req,res) =>
{
    try{

        const responce = await axios.get("https://dummyjson.com/recipes?limit=10");
        const usersData = responce.data;
        console.log(usersData)

        await connectToDatabase();

        const database = client.db('users')
        const coll = database.collection('user_info')

       const user = usersData.recipes;
        const result =  await coll.insertMany(user);
        res.send(result)
    

       const allusers = await coll.find({ name: "Vegetarian Stir-Fry"}).toArray();

       const specificusers =await coll.findOne({ name: "Chicken Alfredo Pasta"});

       res.json({ message: "Recipes created sussessfully", allusers,specificusers});
       

 }
  
  catch(error){
    console.log(error);
    res.send(error) 
  }
    
    
}






// https://dummyjson.com/recipes