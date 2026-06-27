import express from 'express';
import path from 'path';
const app = express();
app.use(express.urlencoded({ extended: true })); // inbuilt middleware to parse urlencoded data
app.use(express.static('public')); // inbuilt middleware to serve static files from the public directory
app.get('/' ,(req, res) => {
  res.sendFile(path.resolve('views/home.html'));
});
app.get('/login', (req, res) => {
  res.send(`<h1>Login Page</h1>
    <p>Welcome to the login page. Please enter your credentials to access your account.</p>
    <form action="/home" method="post">
      <label for="username">Username:</label>
      <input type="text" id="username" name="username" required>
      <br><br>
      <label for="password">Password:</label>
      <input type="password" id="password" name="password" required>
      <br><br>
      <input type="submit" value="Login">
    </form>`);
});


app.post('/home', (req, res) => {
    console.log(req.body);
  res.send('Home Page');
});

app.get('/product', (req, res) => {
  res.send('Product Page');
});

app.get('/users', (req, res) => {
  res.send('Users Page');
});

app.listen(3889, () => {
  console.log('Server is running on port 3889');    
})

