const asyncHandler = require('express-async-handler');
const Note = require('../models/noteModel');

module.exports.getNotes = asyncHandler(async (req, res) => {
  const notes = await Note.find({});
  res.json(notes);
});

module.exports.addNote = asyncHandler(async (req, res) => {
  const { title, content } = req.body;
  const note = await Note.create({
    title,
    content,
  });

  res.json(note);
});

module.exports.getNote = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const note = await Note.findById(id);
  res.json(note);
});

module.exports.updateNote = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;

  const note = await Note.findById(id);

  note.title = title;
  note.content = content;

  await note.save();

  res.json(note);
});

module.exports.deleteNote = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const note = await Note.findById(id);

  await note.remove();

  res.json({ message: 'note removed successfully' });
});
