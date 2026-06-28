
import { userModel } from '../models/userModel.js';
export function getUser(req, res) {
  const users = userModel();

  res.render('user', { users: users});
}