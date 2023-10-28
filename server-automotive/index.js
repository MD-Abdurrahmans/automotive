
const express = require("express");
const { MongoClient, ServerApiVersion, ObjectId, MongoCryptAzureKMSRequestError } = require('mongodb');

const cors = require("cors");
require('dotenv').config()


const app = express();
const port = process.env.PORT || 5000;

// middle ware

app.use(express.json())
app.use(cors())


  

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.r486pno.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    const client = new MongoClient(uri);
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();

    const automotiveCollection = client.db("automotiveDB").collection('cars')
    const  cartCollection = client.db("automotiveDB").collection('userCart')


  
// API ROUTES 

app.get("/",(req, res) => {
    res.send("automotive server is running...");
  });


//   CREATE  

app.post('/products',async(req,res)=>{

   console.log(req.body)
   const  products = req.body;

  //  console.log(products)
   const  result = await automotiveCollection.insertOne(products)
    res.send(result)


})


// Read all products 

app.get('/products',async(req,res)=>{

     const cursor = await automotiveCollection.find().toArray();
     res.send(cursor)


})







// red specific one data by id

app.get('/products/:id',async(req,res)=>{

    const id = req.params.id;

     const filter = {_id: new ObjectId(id)}

    const cursor = await automotiveCollection.findOne(filter)
    res.send(cursor)

})



// cart
app.get('/cart/:id',async(req,res)=>{

  const id = req.params.id;

   const filter = {_id: new ObjectId(id)}

  const cursor = await cartCollection.findOne(filter)
  res.send(cursor)

})


//  update specific data  by id 


app.put('/cart/:id',async(req,res)=>{

    const id = req.params.id;
     const data = req.body;    
    console.log(id)
    const filter = {_id: new ObjectId(id)}

    const options = { upsert: true };

    const updateDoc = {
      $set: {
        name:data.name,
        brand:data.brand,
        price:data.price,
        ratings:data.ratings,
         image:data.image 
      },
    };

    const result = await cartCollection.updateOne(filter,updateDoc,options)

     res.send(result)

})


// user cart api 

app.post('/cart',async(req,res)=>{

   const  cart = req.body;
    // console.log(cart)

 const result = await cartCollection.insertOne(cart)
 res.send(result)


})


// user cart read all 


app.get('/cart',async(req,res)=>{

  

  const  result = await cartCollection.find().toArray();



   res.send(result)

})


// USER CART DELETE SPECIFIC ONE DATA

app.delete('/cart/:id',async(req,res)=>{

   const  id =  req.params.id;
    
   const filter = {_id: new ObjectId(id)}

    const result = await cartCollection.deleteOne(filter);
    res.send(result)
  //  console.log(id)
    
})



// change 

    // Send a ping to confirm a successful connection
    // await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);



  

  


app.listen(port, () => {
    console.log(`Simple Crud is Running on port ${port}`);
  });
  
  