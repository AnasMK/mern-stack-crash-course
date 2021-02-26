const express = require('express');
const {
  getNotes,
  getNote,
  addNote,
  updateNote,
  deleteNote,
} = require('../controllers/noteController');

const router = express.Router();

router.get('/notes', getNotes);
router.get('/notes/:id', getNote);

router.post('/notes', addNote);
router.put('/notes/:id', updateNote);
router.delete('/notes/:id', deleteNote);

module.exports = router;
