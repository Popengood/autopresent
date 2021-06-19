const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'db_damyen_1',
  password: '',
});

// тестирование подключения
connection.connect(err => {
  if (err) {
    return console.error('Ошибка: ' + err.message);
  }
  console.log('Подключение к серверу MySQL успешно установлено');
});
// закрытие подключения
connection.end(function(err) {
  if (err) {
    return console.log('Ошибка: ' + err.message);
  }
  console.log('Подключение закрыто');
});

const consola = require('consola');
const { Nuxt, Builder } = require('nuxt');
const app = require('./app');

const config = require('../nuxt.config.js');
config.dev = !(process.env.NODE_ENV === 'production');

async function start() {
  const nuxt = new Nuxt(config);

  const {
    host = process.env.HOST || '127.0.0.1',
    port = process.env.PORT || 3000,
  } = nuxt.options.server;

  await nuxt.ready();

  if (config.dev) {
    const builder = new Builder(nuxt);
    await builder.build();
  }

  app.use(nuxt.render);

  app.listen(port, host, () => {
    consola.ready({
      message: `Server listening on http://${host}:${port}`,
      badge: true,
    });
  });
}
start();
