const express = require("express");
require('dotenv').config();
const db = require('./db');
const router = require('./Routers/routes');
const cookieParser = require('cookie-parser');
const cors = require('cors');

db.loadData();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors({
  credentials: true,
  preflightContinue: true,
  origin: "http://localhost:3005",
}));

app.use('/api', router);

let port = 3000;
app.listen(port);
console.log("Listening on port " + port);