
const data = {
  users: [
    {
      id: 1,
      name: 'John Doe',
      email: 'johndoe123@gmail.com'
    },
    {
      id: 2,
      name: 'Aditya Sinha',
      email: 'aditya123@gmail.com'
    }
  ]
};

const getUsers = async (req, res) => {
  // const data = await taskService.getUsers();
  res.status(200).json(data);
};

const createUser = async (req, res) => {
  const { name, email } = req.body;
  const user = {
    id: data.users.length + 1,
    name,
    email
  };
  data.users.push(user);
  res.status(201).json(user);
};

// module.exports = {
//   getUsers,
//   createUser
// };

export default {
  getUsers,
  createUser
};
