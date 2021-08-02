const Notes = require("../models/notes_model");
//find all todos
const getAllNotes = async(req, res) => {
    try {
        const posts = await Notes.find({});
        if (posts) {
            res.status(200).json({
                data: posts,
            });
        } else {
            res.status(500).json({
                error: "Empty Notes!",
            });
        }
    } catch (err) {
        res.status(500).json({
            error: "There was a server side error!" + err,
        });
    }
};

//find todo by id
const getANote = async(req, res) => {
    try {
        const post = await Notes.findOne({
            _id: req.params.id,
        });
        if (post) {
            res.status(200).json({
                data: post,
            });
        } else {
            res.status(500).json({
                error: "Note is unavailable!",
            });
        }
    } catch (err) {
        res.status(500).json({
            error: "There was a server side error!",
        });
    }
};

//create a note
const createNote = async(req, res) => {
    try {
        let newNote = new Notes({...req.body, updatedTime: Date.now() });
        await newNote.save((err) => {
            if (!err) {
                res.status(201).json({
                    message: "New note created successfully!",
                });
            } else {
                res.status(500).json({
                    error: "Fill all the fields!" + err,
                });
            }
        });
    } catch (err) {
        res.status(500).json({
            error: "There was a server side error!" + err,
        });
    }
};

//update a note by id
const updateNote = async(req, res) => {
    const query = { _id: req.params.id };
    try {
        await Notes.findOneAndUpdate(
            query, {
                $set: {
                    title: req.body.title,
                    description: req.body.description,
                    updatedTime: Date.now(),
                },
            },
            (err, res2) => {
                if (!err) {
                    res.json({ message: "Note successfully updated!!" });
                } else {
                    res.status(500).json({
                        error: "There was a server side error!" + err,
                    });
                }
            }
        );
    } catch (err) {
        res.status(500).json({
            error: "There was a server side error!",
        });
    }
};

//delete a note by id

const deleteANote = async(req, res) => {
    const deletedNote = await Notes.deleteOne({ _id: req.params.id });
    try {
        if (deletedNote) {
            res.status(200).json({
                message: "Note was deleted successfully!",
            });
        } else {
            res.status(500).json({
                error: "There was a server side error!",
            });
        }
    } catch (err) {
        res.status(500).json({
            error: "There was a server side error!",
        });
    }
};

module.exports = {
    getAllNotes,
    getANote,
    createNote,
    updateNote,
    deleteANote,
};