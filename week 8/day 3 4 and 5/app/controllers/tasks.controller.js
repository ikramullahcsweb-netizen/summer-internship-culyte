let users = [
  { id: 1, name: "Ikramullah", title: "Web Developer" },
  { id: 2, name: "Ali Azghar", title: "CEO Culyte" },
];

export const getUsers = (req, res) => {
  res.status(200).json(users);
};

export const createUser = (req, res) => {
  const { name, title } = req.body;
  if (!name || !title) {
    return res.status(400).json({ error: "name and title are required" });
  }

  const newUser = { id: Date.now(), name, title };
  users.push(newUser);
  res.status(201).json(newUser);
};

export const updateUser = (req, res) => {
  const user = users.find(u => u.id === Number(req.params.id));
  if (!user) return res.status(404).json({ error: "User not found" });

  user.name = req.body.name ?? user.name;
  user.title = req.body.title ?? user.title;
  res.status(200).json(user);
};

export const deleteUser = (req, res) => {
  const exists = users.some(u => u.id === Number(req.params.id));
  if (!exists) return res.status(404).json({ error: "User not found" });

  users = users.filter(u => u.id !== Number(req.params.id));
  res.status(204).send();
};