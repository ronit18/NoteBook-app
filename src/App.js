import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import NotesState from "./context/notes/NotesState";

const App = () => {
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
	return (
		<>
			<NotesState>
				<Navbar mode={mode} toggleMode={toggleMode} />
				<div className="container my-3">
					<Routes>
						<Route extact path="/" element={<Home mode={mode} />} />
						<Route
							extact
							path="/about"
							element={<About mode={mode} />}
						/>
					</Routes>
				</div>
			</NotesState>
		</>
	);
};

export default App;
