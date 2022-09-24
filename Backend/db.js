const mongoose = require("mongoose");
const mongoURI = "mongodb://0.0.0.0:27017/notebook";

const connectToMango = () => {
	mongoose
		.connect(mongoURI, { dbName: "notebook_app", useNewUrlParser: true })
		.then(() => {
			console.log("Connected to mongodb");
		})
		.catch((err) => console.log(err.message));
};
module.exports = connectToMango;
