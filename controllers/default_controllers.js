const Ticket = require("../models/Ticket");

const send_out_ticket = async (req, res) => {
  try {
    const Tickets = await Ticket.getSix();
    res.json({ Tickets });
  } catch (err) {
    console.log("Error on send_out_ticket:", err);
  }
};

module.exports = {
  send_out_ticket,
};
