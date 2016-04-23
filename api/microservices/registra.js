module.exports = function(db) {
	return {
		registra: function(options) {
			this.add({
					role: "registra",
					cmd: "add_new"
				}, (args, res) => {
					//create a user
					//create a profile
					//update the user
					db.user.create({
						identifier: args.userIdentifier,
						password: args.userPassword
					}).exec((err, createdUser) => {
						if (err) throw err;
						req = {
							progress: {}
						}
						req.progress.createdUser = createdUser

						//next()
						db.user_profile.create({
							username: args.userUsername
						}).exec((err, createdProfile) => {
							if (err) throw err;
							req.progress.createdProfile = createdProfile

							// next()
							db.user.update({
								id: req.progress.createdUser.id
							}, {
								profile: req.progress.createdProfile
							}).exec((err, updatedUser) => {
								if (err) throw err

								db.user_profile.update({
									id: req.progress.createdProfile.id
								}, {
									user: req.progress.createdUser.id
								}).exec((err, updatedProfile) => {
									if (err) throw err
									console.log(args)
										// next()
									db.university.findOne({
										id: args.uni_id
									}).exec((err, university) => {
										if (err) throw err;

										university.registras.add(req.progress.createdUser.id)
											// res.send(universities)
										university.save((err) => {
											if (err) throw err

											// next()
											res(null, {
												rusult: university
											})
										})
									})
								})
							})
						})
					})
				}),

				this.add({
					role: "registra",
					cmd: "get_all"
				}, (args, res) => {
					db.university.findOne({
						id: args.uni_id
					}).populate("registras").exec((err, uniFound) => {
						res(null, {
							res: uniFound
						})
					})
				})
		}
	}
}