import { Routes, Route } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import NotesState from "./context/notes/NotesState";

const App = () => {
	return (
		<>
			<NotesState>
				<Navbar />
				<Routes>
					<Route extact path="/home" element={<Home />} />
					<Route extact path="/about" element={<About />} />
				</Routes>
			</NotesState>
		</>
	);
};

export default App;
