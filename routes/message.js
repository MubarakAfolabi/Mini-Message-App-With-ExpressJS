const { Router } = require("express");
const { messages } = require("./index.js");

const messageRouter = Router();

messageRouter.get("/:messageId", (req, res) => {
  const { messageId } = req.params;
  const message = messages[messageId];

  if (!message) {
    return res.status(404).render("404", { statusCode: res.statusCode });
  }

  res.render("message", { message: message });
});

module.exports = messageRouter;
