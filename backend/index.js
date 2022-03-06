const express = require("express");
require('dotenv').config();
const db = require('./db');
const router = require('./Routers/routes');
const cookieParser = require('cookie-parser');

const {Block, Blockchain} = require('./blockchain');

db.loadData();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/api', router);

/*
let bc = new Blockchain();
let b = new Block();
b.data = "test";
bc.addBlock(b);
b = new Block();
b.data = "test2";
bc.addBlock(b);

for(block of bc.chain){
  console.log(block);
}
*/

let port = 3000;
app.listen(port);
console.log("Listening on port " + port);