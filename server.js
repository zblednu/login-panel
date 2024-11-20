#! /usr/bin/node
"use strict";
import express from "express";
const app = express();
app.use(express.static('public', { index: "index.html" }));
app.use(express.json());

const adminCredentials = {
  login: "root",
  password: "toor"
}
app.post("/", (req, res) => {
  const isValidLogin = JSON.stringify(req.body) === JSON.stringify(adminCredentials); 

  const status = isValidLogin ? 200 : 401;
  req.status(status).send();
})

const port = 80;
const hostname = "127.0.0.1";
app.listen(port, hostname, () => {
  console.log(`Live at ${hostname}:${port}`);
});

