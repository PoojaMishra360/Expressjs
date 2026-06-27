import express from 'express';
const app = express();
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('home', { title: 'Home Page', message: 'Welcome to the Home Page!' ,age: req.query.age });
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About Page', message: 'This is the About Page.'  ,age: req.query.age});
});

app.listen(4088, () => {
  console.log('Server is running on port 4088');
});