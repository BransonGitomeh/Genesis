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
				}),

				// check if this user is actually a registra
				this.add({
					role: "university",
					cmd: "auth",
					userType: "registra"
				}, (args, res) => {
					var _ = require("lodash")
					db.university.findOne({
						id: args.uni_id
					}).populate("registras").exec((err, uniFound) => {

						this.act({
							role: "registra",
							cmd: "get_all",
							uni_id: args.uni_id
						}, (err, result) => {
							var index = _.findIndex(result.res.registras, {
								'identifier': args.username,
								'password': args.password
							});

							if (index != -1) {
								res(null, {
									index: index,
									result: result.res.registras[index]
								})
							} else {
								res("no registra was found with that username and passkey in " + uniFound.name, {
									index: index,
									result: result.res.registras[index]
								})
							}

						})

					})
				}),

				//for admins
				this.add({
					role: "university",
					cmd: "auth",
					userType: "admin"
				}, (args, res) => {
					var _ = require("lodash")
					db.university.findOne({
						id: args.uni_id
					}).populate("admins").exec((err, uniFound) => {

						var index = _.findIndex(uniFound.admins, {
							'identifier': args.username,
							'password': args.password
						});

						if (index != -1) {
							res(null, {
								index: index,
								result: uniFound.admins[index]
							})
						} else {
							res("no admin was found with that username and passkey in" + uniFound.name, {
								index: index,
								result: uniFound.admins[index]
							})
						}

					})
				})

				this.add({
					role: "core",
					cmd: "auth"
				}, (args, res) => {
					res(null,{result:"awesome"})					
				})
		}
	}
}