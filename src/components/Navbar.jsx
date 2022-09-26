import React, { useContext, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import noteContext from "../context/notes/noteContext";

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

					<div
						className={`form-check form-switch
					text-${mode === "light" ? "dark" : "light"}
					`}
					>
						<input
							onClick={toggleMode}
							className="form-check-input"
							type="checkbox"
							role="switch"
							id="flexSwitchCheckChecked"
						/>
						<label
							className="form-check-label"
							htmlFor="flexSwitchCheckChecked"
						>
							{`Enable ${
								mode === "light" ? "dark" : "light"
							} Mode`}
						</label>
					</div>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
