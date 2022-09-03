const express = require("express");
const router = express.Router();
const appointmentsController = require("../controllers/todos");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

router.get("/", ensureAuth, appointmentsController.getTodos);

router.post("/createTodo", appointmentsController.createTodo);

router.put("/markComplete", appointmentsController.markComplete);

router.put("/markIncomplete", appointmentsController.markIncomplete);

router.delete("/deleteTodo", appointmentsController.deleteTodo);

module.exports = router;
