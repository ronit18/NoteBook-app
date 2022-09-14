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
module.exports = router;
