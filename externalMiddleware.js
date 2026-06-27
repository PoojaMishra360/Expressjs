import express from 'express';
import morgan from 'morgan';
const app = express();
app.use(morgan('dev')); // external middleware to log requests in the console

app.get('/login', (req, res) => {
  res.send('Login Page');
});

app.get('/home', (req, res) => {
  res.send('Home Page');
}); 

app.get('/product', (req, res) => {
  res.send('Product Page');
});

app.get('/users', (req, res) => {
  res.send('Users Page');
});

app.listen(3990, () => {
  console.log('Server is running on port 3990');
});