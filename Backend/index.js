const connectToMango = require("./db");
const express = require("express");

connectToMango();
const app = express();
const port = 5000;
var cors = require("cors");

app.use(cors());
app.use(express.json());

// Routes
app.get("/", (req, res) => {
	res.send("HelloWorld");
});
app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));

app.listen(port, () => {
	console.log(`App at http://localhost:${port}`);
});
