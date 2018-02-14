// This file configures a web server for testing the production build
// on your local machine.
import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import path from 'path';

const app = express();


//
// Middleware
// -----------------------------------------------------------------------------
// Helmet helps you secure your Express apps by setting various HTTP headers
// https://github.com/helmetjs/helmet
app.use(helmet());
// Enable CORS with various options
// https://github.com/expressjs/cors
app.use(cors());

//Serve all existing static content
app.use(express.static(path.resolve('./dist/')));

//File not found so send the index
app.use((req, res) => {
	res.sendFile(path.resolve('./dist/index.html'));
});

app.listen(4000, () => {
	console.log(`App listening on port 4000!`); // eslint-disable-line no-console
});
