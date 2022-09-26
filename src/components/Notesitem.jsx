import React from "react";
import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

const Noteitem = (props) => {
	const { note } = props;
	return (
		<div className="col-md-3">
			<div class="card my-3">
				<div class="card-body">
					<h5 class="card-title">{note.title}</h5>
					<p class="card-text">{note.description}</p>
					<MdDeleteForever
						className="mx-2"
						style={{ cursor: "pointer" }}
					/>
					<FaEdit className="mx-2" style={{ cursor: "pointer" }} />
				</div>
			</div>
		</div>
	);
};

export default Noteitem;
