const express = require('express');
const router = express.Router();

const { getAllNotes, createNote, updateNote, deleteANote, getANote } = require('../controllers/notes_controller');



//show all notes
router.get("/", getAllNotes);

//show a notes by id
router.get("/:id", getANote);

//create a note
router.post("/", createNote);

//update a note by id
router.put("/:id", updateNote);

//delete a note by id
router.delete("/:id", deleteANote);



module.exports = router;