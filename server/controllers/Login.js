const Login = require('../models/login')
const bcrypt = require("bcrypt");



const sign = async (req, res) => {
  const { username, password, phone, age } = req.body;

  try {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    await Login.create({
      username,
      password: hashedPassword,
      phone,
      age,
    });

    res.send("Account created successfully");
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
};


const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await Login.findOne({ username });

    if (!user) {
      return res.status(404).send("username does not exist");
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (isMatch) {
      res.send("Success");
    } else {
      res.status(400).send("Wrong password");
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
};


module.exports={sign,login}