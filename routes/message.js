const { Router } = require("express");
const { messages } = require("./index.js");

const messageRouter = Router();

messageRouter.get("/:messageId", (req, res) => {
  const { messageId } = req.params;
  console.log(messages[messageId]);
  res.render("message", { message: messages[messageId] });
});

module.exports = messageRouter;
