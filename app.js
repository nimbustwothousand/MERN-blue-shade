const express = require('express');
require('dotenv').config();

//set up the app and variables
const app = express();
const isProduction = process.env.NODE_ENV === 'production';
const port = process.env.PORT || 5000;

//middleware
app.use(function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "http://localhost:3000");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});
app.use(express.json());

//connect to mongodb
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(client => {
		console.log('Connected to mongoDB')
	})
	.catch(err => console.error(err));


//routes
const apiRouter = require('./routes/api');
app.use('/api', apiRouter); //forwards requests to the /api router

app.get('/', (req, res) => res.send('Got a GET request to /'));

/// error handlers

// development error handler
// will print stacktrace
if (!isProduction) {
	app.use(function (err, req, res, next) {
		console.log(err.stack);

		res.status(err.status || 500);

		res.json({
			'errors': {
				message: err.message,
				error: err
			}
		});
	});
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
	res.status(err.status || 500);
	res.json({
		'errors': {
			message: err.message,
			error: {}
		}
	});
});

//start the server
app.listen(port, () => console.log(`App listening at http://localhost:${port}`));