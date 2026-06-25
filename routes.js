import express from 'express';
import routeMiddleware from './routeMiddleware.js';

const app = express();

app.get('/login', (req, res) => {
  res.send('Login Page');
});

// specific routes that require the routeMiddleware this is not a gloabal middleware
app.get('/home', routeMiddleware, (req, res) => {
  res.send('Home Page');
});

app.get('/product', routeMiddleware, (req, res) => {
  res.send('Product Page');
});

app.get('/users', routeMiddleware, (req, res) => {
  res.send('Users Page');
});


app.listen(3880, () => {
  console.log('Server is running on port 3880');
});



