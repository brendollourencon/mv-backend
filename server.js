const express = require('express');

const config = require('./config/config');

const accountRouter = require('./routes/accountRouter');
const notificationRouter = require('./routes/notificationRouter');

const app = express();

app.use('/account', accountRouter);
app.use('/notification', notificationRouter);

app.listen(config.port, console.log(`Aplicação rodando na porta ${config.port}`));