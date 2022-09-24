import noteContext from "./noteContext";

const noteState = (props) => {
	const state = {
		name: "ronit",
	};
	return (
		<noteContext.Provider value={state}>
			{props.children}
		</noteContext.Provider>
	);
};

export default noteState;
