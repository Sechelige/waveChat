const express = require('express');
const cors = require('cors');
const app = express();

var corsOptions = { };

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true })); 

app.get('/', (req, res) => {
    res.json({ message: 'Welcome to waveChat API' });
});

require('./app/routes/user.routes.js')(app);
require('./app/routes/conversation.routes.js')(app);
require('./app/routes/message.routes.js')(app);
require('./app/routes/connexion.routes.js')(app);

const PORT = process.env.PORT ||26500;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});