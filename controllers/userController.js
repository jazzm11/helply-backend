const User = require("../models/User");
const jwt = require("jsonwebtoken");
const Ticket = require("../models/Ticket");
const maxValidDate = 24 * 60 * 60;
const signJWT = (id) => {
  return jwt.sign({ id }, process.env.secret, {
    expiresIn: maxValidDate,
  });
};

const sign_up_user = async (req, res) => {
  const { name, passwd, conPass } = req.body;
  try {
    const userId = await User.signUp(name, passwd, conPass);
    const token = signJWT(userId);
    res.status(201).json({ token });
  } catch (err) {
    console.log("Sign In error:", err);
    res.status(302).json({ err });
  }
};

const sign_in_user = async (req, res) => {
  const { name, passwd } = req.body;
  try {
    const userId = await User.signIn(name, passwd);
    const token = signJWT(userId);
    res.status(201).json({ token });
  } catch (err) {
    console.log("Sign In error:", err);
    res.status(302).json({ err });
  }
};

const get_User_Tickets = async (req, res) => {
  const user = req.params.user;
  try {
    const userTickets = await Ticket.find({ author: user });
    userTickets.reverse();
    res.status(201).json({ userTickets });
  } catch (err) {
    console.log(err);
    res.status(300).json({ err });
  }
};

module.exports = { sign_up_user, sign_in_user, get_User_Tickets };
