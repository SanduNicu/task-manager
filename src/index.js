const express = require('express');
require('./db/mongoose.js');
const userRouter = require('./routers/user');
const taskRouter = require('./routers/task');
const jwt = require('jsonwebtoken');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});


const myFunc = async () => {
  const token = jwt.sign({ _id: 'asdf' }, 'secret', { expiresIn: '10 minutes' });
  console.log(token);
  const data = jwt.verify(token, 'secret');
  console.log(data);
}

myFunc();
