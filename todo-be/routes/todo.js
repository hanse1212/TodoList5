const express = require("express");
const { Todo } = require("../models");

const router = express.Router();

// GET /todos
router.get("/", async (req, res, next) => {
  try {
    // SELECT * FROM todos;
    const todos = await Todo.findAll();
    res.status(200).send(todos);
  } catch (err) {
    next(err);
  }
});

// POST /todos
router.post("/", async (req, res, next) => {
  const { contentI, contentC } = req.body;
  try {
    // INSERT INTO todos(contentI) VALUES("새로운 할 일");
    const newTodo = await Todo.create({ contentI, contentC });
    res.status(201).send(newTodo);
  } catch (err) {
    next(err);
  }
});

// PATCH /todos/{id}
router.patch("/:id", async (req, res, next) => {
  const todoId = req.params.id;
  const { isDone } = req.body;

  try {
    // UPDATE todos SET is_done = TRUE WHERE id = 1; 
    await Todo.update({ isDone }, { where: { id: todoId } });

    // SELECT * FROM todos WHERE id = 1;
    const updatedTodo = await Todo.findByPk(todoId);
    res.status(200).send(updatedTodo);
  } catch (err) {
    next(err);
  }
});

// DELETE /todos/{id}
router.delete("/:id", async (req, res, next) => {
  const todoId = req.params.id;

  try {
    // DELETE FROM todos WHERE id = 1;
    await Todo.destroy({ where: { id: todoId } });
    res.status(204).send();
  } catch (err) {
    next(err);
  }
});

module.exports = router;