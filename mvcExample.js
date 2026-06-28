import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { getUser } from './controllers/userController.js';
const app = express();
app.set('view engine', 'ejs');
app.get('/user', getUser);
const PORT = 3890;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});