import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
	const notesInitial = [
		{
			_id: "6321a681afeaca0d74813054",
			user: "6321a638afeaca0d7481304d",
			title: "this is title",
			description: "my description2",
			tag: "personal2",
			date: "2022-09-14T10:01:37.984Z",
			__v: 0,
		},
		{
			_id: "632f37a70ddf25ea0adb2b3a",
			user: "6321a638afeaca0d7481304d",
			title: "this is title2",
			description: "my description22222",
			tag: "personal2",
			date: "2022-09-24T17:00:23.585Z",
			__v: 0,
		},
	];
	const [mode, setMode] = useState("light");
	const toggleMode = () => {
		if (mode === "light") {
			setMode("dark");
			document.body.style.backgroundColor = "black";
		} else {
			setMode("light");
			document.body.style.backgroundColor = "white";
		}
	};
	const [notes, setNotes] = useState(notesInitial);

	// Add note
	const addNote = (title, description, tag) => {
		const note = {
			_id: "632f37a70ddf25ea0adb2b3a",
			user: "6321a638afeaca0d7481304d",
			title: title,
			description: description,
			tag: tag,
			date: "2022-09-24T17:00:23.585Z",
			__v: 0,
		};
		setNotes(notes.concat(note));
		console.log("Added new note", note);
	};

	// Delete note
	const deleteNote = (id) => {
		console.log("Deleting a note with id " + id);
		const newNotes = notes.filter((note) => {
			return note._id !== id;
		});
		setNotes(newNotes);
	};

	// Update note
	const updateNote = (id, title, description, tag) => {
		for (let index = 0; index < notes.length; index++) {
			const element = notes[index];
			if (element._id === id) {
				element.title = title;
				element.description = description;
				element.tag = tag;
			}
		}
	};
	return (
		<NoteContext.Provider
			value={{
				notes,
				setNotes,
				toggleMode,
				mode,
				setMode,
				addNote,
				deleteNote,
				updateNote,
			}}
		>
			{props.children}
		</NoteContext.Provider>
	);
};

export default NoteState;
