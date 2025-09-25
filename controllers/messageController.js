const db = require("../db/queries");

async function messageGet(req, res) {
  const { id } = req.params;
  // console.log(id);
  const message = await db.getMessage(id);

  if (!message) {
    return res.status(404).render("404", { statusCode: res.statusCode });
  }
  res.render("message", { message: message[0] });
}

module.exports = { messageGet };
