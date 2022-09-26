import { Routes, Route } from "react-router-dom";
import About from "./components/About";
import Alert from "./components/Alert";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import NotesState from "./context/notes/NotesState";

const App = () => {
	return (
		<>
			<NotesState>
				<Navbar />
				<Alert message="Message was deleted" />
				<div className="container my-3">
					<Routes>
						<Route extact path="/" element={<Home />} />
						<Route extact path="/about" element={<About />} />
					</Routes>
				</div>
			</NotesState>
		</>
	);
};

export default App;
