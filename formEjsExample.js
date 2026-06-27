import express from 'express';
 const app = express();
 app.use(express.urlencoded({ extended: true })); // Middleware to parse URL-encoded bodies

app.set('view engine', 'ejs');

 app.get('/add-user', (req, res) => {
   res.render('add-user');
 });

 app.post('/submit-user', (req, res) => {
   const { username, email } = req.body;
   res.render('submit-user', { username, email });
 });

 app.listen(5000, () => {
   console.log('Server is running on port 5000');
 });