const express = require("express");
const Notes = require("../models/Notes");
const router = express.Router();
const fetchuser = require("../middleware/fetchuser");
const { body, validationResult } = require("express-validator");

// Route 1: Fetch all notes: GET (/api/notes/fetchallnotes)
router.get("/fetchallnotes", fetchuser, async (req, res) => {
	try {
		const notes = await Notes.find({ user: req.user.id });
		res.json(notes);
	} catch (error) {
		console.error(error.message);
		res.status(500).send("Server Erorr occured.");
	}
});

// Route 2: Add notes: POST (/api/notes/allnotes)
router.post(
	"/allnotes",
	fetchuser,
	[
		body("title", "Enter a valid title.").isLength({ min: 3 }),
		body(
			"description",
			"description is too short. It must have atleast 6 character"
		).isLength({ min: 6 }),
	],

	async (req, res) => {
		try {
			const { title, description, tag } = req.body;
			//If there are errors, it will return BAD Request and show the errors.
			const errors = validationResult(req);
			if (!errors.isEmpty()) {
				return res.status(400).json({ errors: errors.array() });
			}
			const note = new Notes({
				title,
				description,
				tag,
				user: req.user.id,
			});
			const savedNotes = await note.save();

			res.json(savedNotes);
		} catch (error) {
			console.error(error.message);
			res.status(500).send("Server Erorr occured.");
		}
	}
);
// Route 3: Update notes: Put (/api/notes/updatenote)
router.put("/updatenote/:id", fetchuser, async (req, res) => {
	try {
		const { title, description, tag } = req.body;

		const newNote = {};
		if (title) {
			newNote.title = title;
		}
		if (description) {
			newNote.description = description;
		}
		if (tag) {
			newNote.tag = tag;
		}

		let note = await Notes.findById(req.params.id);

		if (!note) {
			return res.status(404).send("Not found.");
		}
		if (note.user.toString() !== req.user.id) {
			return res.status(401).send("Not Allowed.");
		}

		note = await Notes.findByIdAndUpdate(
			req.params.id,
			{ $set: newNote },
			{ new: true }
		);
		res.json({ note });
	} catch (error) {
		console.error(error.message);
		res.status(500).send("Server Erorr occured.");
	}
});
// Route 4: delete an existing notes: delete (/api/notes/deletenote)
router.delete("/deletenote/:id", fetchuser, async (req, res) => {
	try {
		let note = await Notes.findById(req.params.id);

		if (!note) {
			return res.status(404).send("Not found.");
		}
		if (note.user.toString() !== req.user.id) {
			return res.status(401).send("Not Allowed.");
		}

		note = await Notes.findByIdAndDelete(req.params.id);
		res.json({ success: "Note was deleted", note: note });
	} catch (error) {
		console.error(error.message);
		res.status(500).send("Server Erorr occured.");
	}
});
module.exports = router;
