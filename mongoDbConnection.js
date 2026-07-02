import express from 'express';
import { MongoClient ,ObjectId} from 'mongodb';
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

app.use(express.urlencoded({ extended: true }));
client.connect().then(() => {
  console.log('Connected to MongoDB');
  const db = client.db(dbName);
  const collection = db.collection('student');
  app.get('/ui', async (req, res) => {
    const students = await collection.find({}).toArray();
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

  app.get('/add', (req, res) => {
    res.render('studentForm');
  });

  app.post('/student-insert', async (req, res) => {
    const student = req.body;
    const result = await collection.insertOne(student);
    console.log(result);
    res.send(result);
});

// this calling the delete api to delete the student from the database using the id of the student
// for thunder testing
app.delete('/api/:id', async (req, res) => {
    const result = await collection.deleteOne({ _id: new ObjectId(req.params.id) });
    console.log(result);
    if(result) {
  res.send({ message: 'Student deleted successfully' ,
    sucess : true,
    result : result
  });
    } else {
      res.status(404).send({ message: 'Student not found' ,
      sucess : false,
      result : result
    });
    }
  
  });

  //this is calling from UI page to delete the student from the database
  // for UI testing
  app.get('/ui/api/:id', async (req, res) => {
    const result = await collection.deleteOne({ _id: new ObjectId(req.params.id) });
    console.log(result);
    if(result) {
  res.send(`<h1>Student deleted successfully</h1><a href="/ui">Go back to student list</a>`);
    } else {
      res.status(404).send(`<h1>Student not found</h1><a href="/ui">Go back to student list</a>`);
    }
  
  });

  app.get('/ui/student/:id', async (req, res) => {
    const student = await collection.findOne({ _id: new ObjectId(req.params.id) });
    console.log(student);
    res.render('UpdateForm', { student });
  });

  app.post('/student-update/:id', async (req, res) => {
    const student = req.body;
    const result = await collection.updateOne({ _id: new ObjectId(req.params.id) }, { $set: student });
    console.log(result);
    res.send(result);
  });
}).catch(err => {
  console.error('Error connecting to MongoDB:', err);

});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})