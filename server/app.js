require('dotenv').config();
const express = require('express');
const app = express();
const pies = require('./controllers/piecontroller');
const sequelize = require('./db');
const user = require('./controllers/usercontroller');

sequelize.sync();

app.use(express.json());
app.use(require('./middleware/headers'));  // pulls middleware into file

app.use('/pies', pies);

app.use('/auth', user);

app.listen(process.env.PORT, () => console.log(`app is listening on ${process.env.PORT}`));


////the main router or hub directing to the endpoints...think of a switchboard