const Note = require("../models/postNotes.js")
const createNote = (req, res) => {
    const body = req.body;

    if (!body) {
        return res.status(400).json({
            success: false,
            error: "Empty"
        });
    }

    const note = new Note(body);

    if (!note) {
        return res.status(400).json({success: false, error: "Note not created"});
    }

    note.save().then(() => {
        return res.status(201).json({
            success: true,
            id: note._id,
            message: "Note Saved",
            data: note
        })
    })
        .catch(err => {
            res.status(400).json({
                success: false,
                err,
                message: "Note not saved"
            })
        });
}



const deleteNote= async (req, res) => {
    await Note.findOneAndDelete({ _id: req.params.id }, (err, note) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!note) {
            return res
                .status(404)
                .json({ success: false, error: `Movie not found` })
        }

        return res.status(200).json({ success: true, data: note })
    }).catch(err => console.log(err))
}
const getNotes = async (req, res) => {
    await Note.find({}, (err, notes) => {
        if (err) {
            return res.status(400).json({success: false, error: err})
        }
        return res.status(200).json({success: true, data: notes})
    }).catch(err => console.log(err))
}

module.exports = {createNote,  deleteNote, getNotes};