const path = require('path');
const router = require('express').Router();
//const { returnNotes } = require('../../db/db.json');
const { notes } = require('../../db/db.json');
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');

router.get('/notes', (req, res) => {
  
  res.json(notes);
});

router.post('/notes', (req, res) => {
  
  req.body.id = notes.length.toString(); 
  const note = createNewNote(req.body, notes);
  res.json(note);
  
});

router.delete('/notes/:id', (req, res) => {
  
});

function createNewNote(body, notes) {
  console.log(notes)
  const note = body;
  notes.push(note); 
  fs.writeFileSync(
    path.join(__dirname, '../../db/db.json'),
    JSON.stringify({ notes }, null, 2) 
  );
  return note;
};

module.exports = router;