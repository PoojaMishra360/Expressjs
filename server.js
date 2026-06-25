import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
const app = express();
const port = 3900;

function middleware(req, res, next) {
    console.log(`${req.method} ${req.url}`);
  res.setHeader('X-Middleware', 'true');
  res.setHeader('X-Middleware-Message', 'Middleware ran');
  //chack if the user is under 18 years old then send a message that they are not allowed to access the page
    if(req.query.age < 18) {
   res.send('You are not allowed to access this page.');
    } else {
        // here we call next() to pass control to the next middleware function or route handler or call the next route handler in the stack
     next();
    }
  
 
}

// this is glaobal middleware that will run for all routes and all requests
app.use(middleware);



const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const publicDir = path.resolve(__dirname, 'public');
const viewsDir = path.resolve(__dirname, 'views');

app.use(express.static(publicDir));


app.get('/', (req, res) => {
  res.sendFile(path.join(viewsDir, 'home.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(viewsDir, 'about.html'));
});

app.get('/contact', (req, res) => {
  res.sendFile(path.join(viewsDir, 'contact.html'));
});

app.use((req, res) => {
  res.status(404).sendFile(path.join(viewsDir, '404.html'));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
