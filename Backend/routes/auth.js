const express = require("express");
const User = require("../models/User");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const JWT = "hfh";

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
			const salt = await bcrypt.genSalt(10);
			const securePass = await bcrypt.hash(req.body.password, salt);
			user = await User.create({
				name: req.body.name,
				email: req.body.email,
				password: securePass,
			});

			const data = {
				user: {
					id: user.id,
				},
			};
			const authToken = jwt.sign(data, JWT);

			console.log(user);

			res.json({ authToken });
		} catch (error) {
			console.error(error.message);
			res.status(500).send("Some Erorr occured.");
		}
	}
);

module.exports = router;
