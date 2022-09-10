const express = require("express");
const User = require("../models/User");
const router = express.Router();
const { body, validationResult } = require("express-validator");

// Post (/api/auth/createuser)
router.post(
	"/createuser",
	[
		body("name", "Enter a valid name.").isLength({ min: 3 }),
		body("email", "Enter a valid email.").isEmail(),
		body(
			"password",
			"Password is too short. It must have atleast 6 character"
		).isLength({ min: 6 }),
	],
	async (req, res) => {
		//If there are errors, it will return BAD Request and show the errors.
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}
		// Checks whether user with same email exits or not.
		try {
			let user = await User.findOne({ email: req.body.email });
			if (user) {
				return res.status(400).json({
					error: "Sorry a user with this email already exist.",
				});
			}
			user = await User.create({
				name: req.body.name,
				email: req.body.email,
				password: req.body.password,
			});
			res.send(req.body);
			console.log(req.body);
		} catch (error) {
			console.error(error.message);
			res.status(500).send("Some Erorr occured.");
		}
	}
);

module.exports = router;
