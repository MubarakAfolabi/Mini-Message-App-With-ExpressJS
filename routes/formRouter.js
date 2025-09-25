const { Router } = require("express");
const formRouter = Router();
const formController = require("../controllers/formController");

formRouter.get("/", formController.renderForm);

formRouter.post("/", formController.formPost);

module.exports = formRouter;
