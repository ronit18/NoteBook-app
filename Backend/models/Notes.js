const mongoose = require("mongoose");
const { Schema } = mongoose;

const NotesSchema = new Schema({
	user: {
		id: mongoose.Schema.Types.ObjectId,
		ref: "user",
	},
	title: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	tag: {
		type: String,
		default: "general",
	},
	date: {
		type: Date,
		default: Date.now,
	},
});
const Note = mongoose.model("notes", NotesSchema);
module.exports = Note;
