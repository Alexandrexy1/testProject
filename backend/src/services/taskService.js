const { Task } = require('../models');

const getAllTasks = async () => {
  const tasks = await Task.findAll();
  return tasks;
};

const getTask = async (id) => {
  const task = await Task.findByPk(id);
  return task;
};

const createTask = async (title) => {
  if (!title) {
    throw new Error("O título não pode estar vazio.");
  }

  const task = await Task.create({
    title,
    completed: false,
  });

  return task;
};

const updateTask = async (id, data) => {
  const task = await Task.findByPk(id);
  if (!task) return null;

  await task.update(data);

  return task;
};

const deleteTask = async () => {
  const last = await Task.findOne({
    order: [['id', 'DESC']]
  });

  if (!last) return null;

  await last.destroy();
  return true;
};

module.exports = {
  getAllTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask
};