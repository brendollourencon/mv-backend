const express = require('express');

const config = require('./config/config');
const database = require('./config/sincronize');

const accountRouter = require('./routes/accountRouter');
const notificationRouter = require('./routes/notificationRouter');
const userRouter = require('./routes/userRouter');

const app = express();

app.use(express.json());

app.use('/account', accountRouter);
app.use('/notification', notificationRouter);
app.use('/user', userRouter);

app.get('/sync', async (req, res) => {
  await database.sync({force: true});
  res.send('Banco de dados atualizado');
})

app.listen(config.port, console.log(`Aplicação rodando na porta ${config.port}`));