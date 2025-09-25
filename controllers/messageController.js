const { messages } = require("./indexController");

const messageGet = (req, res) => {
  const { messageId } = req.params;
  const message = messages[messageId];

  if (!message) {
    return res.status(404).render("404", { statusCode: res.statusCode });
  }
  res.render("message", { message: message });
};

module.exports = { messages, messageGet };
