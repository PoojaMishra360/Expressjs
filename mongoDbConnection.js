import express from 'express';
import { MongoClient } from 'mongodb';
const app = express();
const PORT = 4000;
 const uri = 'mongodb://localhost:27017';
 const dbName = 'collage';
    const client = new MongoClient(uri);

     app.set('view engine', 'ejs');
     
// app.get('/',  async (req, res) => {
//    await client.connect();
//   console.log('Connected to MongoDB');
//   const db = client.db(dbName);
//   const collection = db.collection('student');
//   const students = await collection.find({}).toArray();
//   console.log(students);
//   res.render('student', { students });
// });

client.connect().then(() => {
  console.log('Connected to MongoDB');
  const db = client.db(dbName);
  const collection = db.collection('student');
  app.get('/ui', async (req, res) => {
    const students = await collection.find({}).toArray();
    console.log(students);
    res.render('student', { students });
  });
  app.get('/api', async (req, res) => {
    const students = await collection.find({}).toArray();
    console.log(students);
    res.send(students);
  });
   app.get('/api/:id', async (req, res) => {
    const students = await collection.find({ id: parseInt(req.params.id) }).toArray();
    console.log(students);
    res.send(students);
  });


}).catch(err => {
  console.error('Error connecting to MongoDB:', err);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})