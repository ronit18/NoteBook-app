import React from "react";
import Notes from "./Notes";

const Home = (props) => {
	return (
		<>
			<div
				className={`text-${props.mode === "light" ? "dark" : "light"}`}
			>
				<h1>Add a Note</h1>
				<div className="container my-3">
					<form>
						<div className="mb-3">
							<label
								htmlFor="exampleInputEmail1"
								className="form-label"
							></label>
							<input
								type="email"
								className="form-control"
								id="exampleInputEmail1"
								aria-describedby="emailHelp"
							/>
							<div id="emailHelp" className="form-text"></div>
						</div>
						<div className="mb-3">
							<label
								htmlFor="exampleInputPassword1"
								className="form-label"
							></label>
							<input
								type="password"
								className="form-control"
								id="exampleInputPassword1"
							/>
						</div>
						<div className="mb-3 form-check">
							<input
								type="checkbox"
								className="form-check-input"
								id="exampleCheck1"
							/>
							<label
								className="form-check-label"
								htmlFor="exampleCheck1"
							></label>
						</div>
						<button type="submit" className="btn btn-primary">
							Submit
						</button>
					</form>
				</div>
				<Notes />
			</div>
		</>
	);
};

export default Home;
