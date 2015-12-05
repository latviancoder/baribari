module.exports = (app, db) => {

	// Add mail api endpoint
	app.post('/api/test', (req, res) => {
		db.run("INSERT INTO emails (email, data) VALUES ($email, $data)", {
			$email: req.body.email,
			$data: JSON.stringify(req.body.locale)
		}, () => {
			res.send();
		});
	});

	// List of sets for main page
	app.get('/:lang', (req, res, next) => {
		db.all('SELECT * FROM sets ORDER BY name DESC', {}, (err, sets) => {

			res.locals.data = {
				SetsStore: {
					sets: sets
				}
			}

			next();
		});
	});

};