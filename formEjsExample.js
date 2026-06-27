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
 app.get('/user-list', (req, res) => {
   const users = [
     { username: 'JohnDoe', email: 'john.doe@example.com' },
     { username: 'JaneSmith', email: 'jane.smith@example.com' },
     { username: 'BobJohnson', email: 'bob.johnson@example.com' }
   ];
   res.render('user-list', { users });
 });

 app.listen(5000, () => {
   console.log('Server is running on port 5000');
 });