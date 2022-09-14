const express = require("express");
const Notes = require("../models/Notes");
const router = express.Router();
const fetchuser = require("../middleware/fetchuser");

// Route 1: Fetch all notes: GET (/api/notes/fetchallnotes)
router.get("/fetchallnotes", fetchuser, async (req, res) => {
	const notes = await Notes.find({ user: req.user.id });
	res.json(notes);
});

module.exports = router;
