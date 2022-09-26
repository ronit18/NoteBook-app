import React, { useContext, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import noteContext from "../context/notes/noteContext";
import { RiMoonClearFill, RiMoonClearLine } from "react-icons/ri";

const Navbar = () => {
	let location = useLocation();
	useEffect(() => {
		console.log(location.pathname);
	}, [location]);

	const context = useContext(noteContext);
	const { mode, toggleMode } = context;
	return (
		<>
			<nav
				className={`navbar navbar-expand-lg bg-${mode} navbar-${mode}`}
			>
				<div className="container-fluid">
					<Link className="navbar-brand" to="/">
						Notebook
					</Link>

					<div>
						{mode === "light" ? (
							<RiMoonClearFill
								onClick={toggleMode}
								size={40}
								style={{ cursor: "pointer" }}
							/>
						) : (
							<RiMoonClearLine
								onClick={toggleMode}
								size={40}
								style={{ cursor: "pointer", color: "white" }}
							/>
						)}
					</div>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
