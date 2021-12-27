const path = require('path');
const router = require('express').Router();
const { returnNotes } = require('../../Develop/db/db.json');
const { notes } = require('../../Develop/db/db.json');

router.get('/notes', (req, res) => {
  
  res.json(notes);
});

module.exports = router;