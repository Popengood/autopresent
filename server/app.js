const mysql = require('mysql2');
const bluebird = require('bluebird');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// const commentRoutes = require('./routes/comment.routes');

const connection = mysql.createConnection({
  host: 'localhost',
  database: 'db_damyen_1',
  user: 'root',
  password: '',
});

// тестирование подключения
connection.connect(err => {
  if (err) {
    return console.error('Ошибка: ' + err.message);
  }
  console.log('Подключение к серверу MySQL успешно установлено');
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// app.use('/api/comment', commentRoutes);

// закрытие подключения
connection.end();

module.exports = app;
