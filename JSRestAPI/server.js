//https://www.bezkoder.com/node-js-rest-api-express-mysql/
//https://smallstep.com/hello-mtls/doc/combined/express/nodejs
const express = require('express');
const cors = require('cors');
const app = express();

var corsOptions = { 
    origin: 'http://localhost:8081'
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true })); 

app.get('/', (req, res) => {
    res.json({ message: 'Welcome to sechelige application.' });
});

require('./app/routes/user.routes.js')(app);

const PORT = process.env.PORT || 6500;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
}); 