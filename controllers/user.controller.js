exports.register = async (req, res) => {
	// Hash password
	const salt = await bcrypt.genSalt(10);
	const hasPassword = await bcrypt.hash(req.body.password, salt);

	// Create an user object
	const user = new User({
		mobile: req.body.mobile,
		email: req.body.email,
		name: req.body.name,
		password: hasPassword,
		status: req.body.status || 1
	});

	try {
		const id = await User.create(user);
		user.id = id;
		delete user.password;
		res.send(user);
	} catch (err) {
		res.status(500).send(err);
	}
};

