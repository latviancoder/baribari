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

	app.get('/api/sets/:link', (req, res) => {
		db.get('SELECT * FROM sets WHERE link=$link', {$link: req.params.link}, (err, single) => {
			res.json(single);
		});
	});

	app.get('/api/sets', (req, res) => {
		db.all('SELECT * FROM sets ORDER BY price ASC', {}, (err, list) => {
			res.json(list);
		});
	});


	// List of sets for main page
	app.get('/:lang', (req, res, next) => {
		db.all('SELECT * FROM sets ORDER BY name DESC', {}, (err, sets) => {

			res.locals.data = {
				SetsStore: {
					single: {},
					sets
				}
			}

			next();
		});
	});

	// Single set details
	app.get('/:lang/details/:link', (req, res, next) => {
		db.get('SELECT * FROM sets WHERE link=$link', {$link: req.params.link}, (err, single) => {

			res.locals.data = {
				SetsStore: {
					sets: [],
					single
				}
			}

			next();
		});
	});

};