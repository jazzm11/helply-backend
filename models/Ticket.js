const { Schema, model } = require("mongoose");
const { type } = require("os");

const ticketSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    content: {
      type: String,
    },
    status: {
      type: String,
      required: true,
    },
    priority: {
      type: String,
      required: true,
    },
    privacy: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

ticketSchema.statics.getSix = async () => {
  const Tickets = await Ticket.find().sort("-createdAt");
  Tickets.reverse();
  const list = [];
  for (let i = 0; i < 6; i++) {
    const ticket = Tickets[i];
    list.push(ticket);
  }
  console.log("Tickets:", list);
  return list;
};

const Ticket = model("tickets", ticketSchema);

module.exports = Ticket;
