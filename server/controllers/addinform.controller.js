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

module.exports.fetchBestsellers = (reg, res) => {
  res.send('fetchBestsellers');
  const lider = fs.readFileSync(
    'http://autopresent.ru/includes/lider.txt',
    'utf8'
  );
  console.log(lider);
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
