import express from 'express';
import userJson from './userJson.json' with { type: 'json' };

const app = express();
const PORT = 4000;

app.get('/users', (req, res) => {
  res.json(userJson);
});


app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
    const user = userJson.find(u => u.id === parseInt(userId));
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(user);
});


app.get('/users/:name', (req, res) => {
  const userName = req.params.name;
  console.log(userName);
  const user = userJson.find(u => u.name.toLocaleLowerCase() === userName.toLocaleLowerCase());
  if (!user) {
    console.log(userName);
    return res.status(404).json({ error: 'User not found' });
  }
  res.json(user);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});