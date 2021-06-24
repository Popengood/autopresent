const pool = require('~/server/config');

module.exports.fetchBooks = async (reg, res) => params => {
  const query =
    'SELECT * FROM `tbl_article` WHERE params = "1" AND `status`	= "1" ORDER BY id DESC LIMIT 20';

  await pool.promise().query(query)
  .then(([rows]) => res.json(rows))
  .then(() => pool.end())
  .catch(err => console.log(err));
};
