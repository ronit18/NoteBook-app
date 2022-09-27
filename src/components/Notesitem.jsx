import React from "react";
import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { useContext } from "react";
import noteContext from "../context/notes/noteContext";

const Noteitem = (props) => {
	const { note } = props;
	const context = useContext(noteContext);
	const { mode, deleteNote } = context;

	return (
		<div className="col-md-3">
			<div className="card my-3">
				<div
					className={`card-body text-${
						mode === "light" ? "dark" : "light"
					} bg-${mode === "light" ? "light" : "secondary"}`}
				>
					<h5 className="card-title">{note.title}</h5>
					<p className="card-text">{note.description}</p>
					<MdDeleteForever
						className="mx-2"
						style={{ cursor: "pointer" }}
						onClick={() => {
							deleteNote(note._id);
						}}
					/>
					<FaEdit className="mx-2" style={{ cursor: "pointer" }} />
				</div>
			</div>
		</div>
	);
};

export default Noteitem;
