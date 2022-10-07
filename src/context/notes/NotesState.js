import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
	const host = "http://localhost:5000"; // Host url

	const notesInitial = [];
	//State
	const [notes, setNotes] = useState(notesInitial); //State for update notes
	const [mode, setMode] = useState("light"); // State for light/dark mode.
	// Func for toggle button of theme
	const toggleMode = () => {
		if (mode === "light") {
			setMode("dark");
			document.body.style.backgroundColor = "black";
		} else {
			setMode("light");
			document.body.style.backgroundColor = "white";
		}
	};
	//Fetch all notes
	const getNotes = async () => {
		const response = await fetch(`${host}/api/notes/fetchallnotes`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				"auth-token":
					"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjMzZmExZGUxZDVlOTczZTc5OTIxODRiIn0sImlhdCI6MTY2NTExNDY0MH0.DyppYC7GK6VrCbquUTp-1JOxjP_OkP4UBFNrFrLXyzk",
			},
		});
		const json = await response.json();
		console.log(json);
		setNotes(json);
	};

	// Add note
	const addNote = async (title, description, tag) => {
		const response = await fetch(`${host}/api/notes/allnotes`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"auth-token":
					"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjMzZmExZGUxZDVlOTczZTc5OTIxODRiIn0sImlhdCI6MTY2NTExNDY0MH0.DyppYC7GK6VrCbquUTp-1JOxjP_OkP4UBFNrFrLXyzk",
			},
			body: JSON.stringify({ title, description, tag }),
		});
		const json = await response.json();
		console.log(json);
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
	const deleteNote = async (id) => {
		const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json",
				"auth-token":
					"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjMzZmExZGUxZDVlOTczZTc5OTIxODRiIn0sImlhdCI6MTY2NTExNDY0MH0.DyppYC7GK6VrCbquUTp-1JOxjP_OkP4UBFNrFrLXyzk",
			},
		});
		const json = response.json();
		console.log(json);

		console.log("Deleting a note with id " + id);
		const newNotes = notes.filter((note) => {
			return note._id !== id;
		});
		setNotes(newNotes);
	};

	// Update note
	const editNote = async (id, title, description, tag) => {
		const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"auth-token":
					"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjMzZmExZGUxZDVlOTczZTc5OTIxODRiIn0sImlhdCI6MTY2NTExNDY0MH0.DyppYC7GK6VrCbquUTp-1JOxjP_OkP4UBFNrFrLXyzk",
			},
			body: JSON.stringify({ title, description, tag }),
		});
		const json = await response.json();
		console.log(json);

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
				getNotes,
				setMode,
				addNote,
				deleteNote,
				editNote,
			}}
		>
			{props.children}
		</NoteContext.Provider>
	);
};

export default NoteState;
