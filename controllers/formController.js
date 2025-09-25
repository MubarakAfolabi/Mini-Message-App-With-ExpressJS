const { messages } = require("./indexController");

const renderForm = (req, res) => {
  res.render("form");
};

const formPost = (req, res) => {
  const { authorName, message } = req.body;
  messages.push({ text: message, user: authorName, added: new Date() });
  res.redirect("/");
};

module.exports = { renderForm, formPost };
