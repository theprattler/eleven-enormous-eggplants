const router = require('express').Router();
const { returnNotes } = require('../../Develop/db/db.json');
const { notes } = require('../../Develop/db/db.json');

router.get('/api/notes', (req, res) => {
  let results = notes;
  if (req.query) {
    results = returnNotes(req.query, results);
  }
  res.json(results);
});

module.exports = router;