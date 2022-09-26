import React, { useContext } from "react";
import noteContext from "../context/notes/noteContext";
import Noteitem from "./Notesitem";

const Notes = () => {
	const context = useContext(noteContext);
	const { notes, mode } = context;
	return (
		<div className={`row my-3 text-${mode === "light" ? "dark" : "light"}`}>
			<h2>You Notes</h2>
			{notes.map((note) => {
				return <Noteitem key={note._id} note={note} />;
			})}
		</div>
	);
};

export default Notes;
