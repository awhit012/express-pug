const User = require('../models/user');

class UserController {
	async getAll(req, res, next) {
		const users = await User.find({})
	  res.render("users", { users });
	}

	async getOne(req, res, next) {
		const user = await User.findById(req.params.id)
	  res.render("user", { user });
	}

	async create(req, res, next) {
		await User.create(req.body)
		res.redirect('/users')
	}

	new(req, res) {
		res.render("newUser")
	}

	async editForm(req, res) {
		const user = await User.findById(req.params.id)
		res.render("editUser", { user })
	}

	async update(req, res) {
		const id = req.body._id
		const updatedUser = { name: req.body.name, title: req.body.title }
		try {
			await User.findByIdAndUpdate(id, updatedUser)
			res.redirect(`/users/${req.params.id}`)	
		} catch (e) {
			res.render("error")
		}
	}

	async delete(req, res, next) {
		const user = await User.findByIdAndRemove(req.params.id)
		res.redirect('/users')
	}

}

module.exports = new UserController()