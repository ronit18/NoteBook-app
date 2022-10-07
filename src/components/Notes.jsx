import React, { useContext, useEffect } from "react";
import noteContext from "../context/notes/noteContext";
import AddNote from "./AddNote";
import Noteitem from "./Notesitem";

const Notes = () => {
	const context = useContext(noteContext);
	const { notes, mode, getNotes } = context;
	useEffect(() => {
		getNotes();
		// eslint-disable-next-line
	}, []);
	const updateNote = () => {};
	return (
		<>
			<AddNote />
			<div
				className={`row my-3 text-${
					mode === "light" ? "dark" : "light"
				}`}
			>
				<h2>Your Notes</h2>
				{notes.map((note) => {
					return (
						<Noteitem
							key={note._id}
							updateNote={updateNote}
							note={note}
						/>
					);
				})}
			</div>
		</>
	);
};

export default Notes;
