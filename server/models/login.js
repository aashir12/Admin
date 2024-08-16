const mongoose = require("mongoose");

const loginSchema = new mongoose.Schema({
  username: String,
  password: String,
  phone: String,
  date: {
    type: Date,
    default: Date.now,
  },
});

const Login = mongoose.model("Login", loginSchema);

module.exports = Login;
