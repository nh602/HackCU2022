const express = require("express");
require('dotenv').config();
const db = require('./db');
const router = require('./Routers/routes');

db.loadData();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', router);

app.listen(3000);
console.log("Listening on port 3000");