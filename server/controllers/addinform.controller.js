const pool = require('../config');

module.exports.fetchNovetly = async (req, res) => {
  const query =
    'SELECT * FROM `tbl_article` WHERE `novetly` = 1 AND `status` = 1 ORDER BY id DESC LIMIT 15';

  await pool
    .promise()
    .execute(query)
    .then(([rows]) => {
      res.json({ books: rows });
    })
    // .then(() => pool.end())
    .catch(err => res.status(500).json(err));
};

module.exports.fetchArticul = async (req, res, next) => {
  const query =
    'SELECT DISTINCT articul, count(articul) AS count FROM `tbl_order` WHERE `articul` != 8097 AND `articul` != "" AND `articul` NOT REGEXP "," GROUP BY articul ORDER BY count DESC LIMIT 10';

  await pool
    .promise()
    .execute(query)
    .then(([rows]) => {
      req.articuls = rows.map(book => "'" + book.articul + "'");
    })
    // .then(() => pool.end())
    .catch(err => res.status(500).json(err));
  next();
};

module.exports.fetchBeastsellers = async (req, res) => {
  const query =
    'SELECT * FROM `tbl_article` WHERE `articul` IN (' + req.articuls + ')';

  await pool
    .promise()
    .execute(query)
    .then(([rows]) => {
      res.json({ books: rows });
    })
    // .then(() => pool.end())
    .catch(err => res.status(500).json(err));
};

module.exports.fetchLatest = async (req, res) => {
  const query =
    'SELECT * FROM `tbl_article` WHERE `status` = 1 ORDER BY id DESC LIMIT 15';

  await pool
    .promise()
    .execute(query)
    .then(([rows]) => {
      res.json({ books: rows });
    })
    // .then(() => pool.end())
    .catch(err => res.status(500).json(err));
};
