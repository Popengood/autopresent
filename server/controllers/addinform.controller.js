const pool = require('../config');

exports.fetchBooks = async (req, res) => {
  const query =
    'SELECT * FROM `tbl_article` WHERE `' +
    req.condition +
    '` = 1 AND `status` = 1 ORDER BY id DESC LIMIT 20';

  await pool
    .promise()
    .query(query)
    .then(([rows]) => res.json({ books: rows }))
    // .then(() => pool.end())
    .catch(err => console.log(err));
};
