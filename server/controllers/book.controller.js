const pool = require('../config');

module.exports.fetchModels = async (req, res) => {
  const query =
    "SELECT * FROM `tbl_article` WHERE `parent` = '" +
    req.params._model +
    "' AND `status` = 1 ORDER BY position";

  await pool
    .promise()
    .execute(query)
    .then(([rows]) => {
      res.json({ books: rows });
    })
    // .then(() => pool.end())
    .catch(err => res.status(400).json(err));
};
