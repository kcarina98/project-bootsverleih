import { User } from "./model.js";

export async function userLogin(_, res) {
  res.json({ success: true });
}

export async function addUser(req, res) {
  const newUser = new User(req.body);
  await newUser.save();
  console.log("Neuer User: ", newUser);
  res.end();
}

export async function getUsers(req, res) {
  const user = await User.find();
  res.json(user);
}
