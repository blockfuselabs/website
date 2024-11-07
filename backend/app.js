const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('./routes');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
	res.json({
		status: false,
		message: 'You probably shouldn\'t be here, but...',
        data: {
	      service: 'blockfuselabs-api',
	      version: '1.x'
	    }
	})
})

app.use('/api', routes);

module.exports = app;
