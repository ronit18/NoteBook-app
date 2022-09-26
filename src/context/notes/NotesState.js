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
	const [notes, setNotes] = useState(notesInitial);

	return (
		<NoteContext.Provider value={{ notes, setNotes }}>
			{props.children}
		</NoteContext.Provider>
	);
};

export default NoteState;
