const db = require("../db/queries");

const renderForm = (req, res) => {
  res.render("form");
};

async function formPost(req, res) {
  const { authorName, message } = req.body;
  await db.insertMessage(authorName, message);
  res.redirect("/");
}

module.exports = { renderForm, formPost };
