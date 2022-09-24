import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = (props) => {
	let location = useLocation();
	useEffect(() => {
		console.log(location.pathname);
	}, [location]);

	return (
		<>
			<nav
				className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode}`}
			>
				<div className="container-fluid">
					<Link className="navbar-brand" to="/">
						Notebook
					</Link>

					<div
						className={`form-check form-switch
					text-${props.mode === "light" ? "dark" : "light"}
					`}
					>
						<input
							onClick={props.toggleMode}
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
								props.mode === "light" ? "dark" : "light"
							} Mode`}
						</label>
					</div>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
