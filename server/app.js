const mysql = require('mysql2');
const bluebird = require('bluebird');
const express = require('express');
const bodyParser = require('body-parser');
const config = require('../server/config.js');

const app = express();

// const asideRoutes = require('./routes/aside.routes');

connection = mysql.createConnection(config);

// тестирование подключения
connection.connect(err => {
  if (err) {
    return console.error('Ошибка: ' + err.message);
  }
  console.log('app: Подключение к серверу MySQL успешно установлено');
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// app.use('/api/caside', asideRoutes);

// закрытие подключения
connection.end();

module.exports = app;
