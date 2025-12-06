const express = require('express');
const cors = require('cors');
const tasksRouter = require('./routes/tasksRouter');
const PORT = process.env.PORT

const app = express();
app.use(cors());
app.use('/tasks', tasksRouter);


app.listen(PORT, () => console.log(`Server running on ${PORT}`));

