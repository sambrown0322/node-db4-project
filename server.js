const express = require("express");

// const db = require("./data/db-config");

const recipeRouter = require("./router/recipe-router");

const server = express();

server.use(express.json());
server.use("/api/recipes", recipeRouter);

module.exports = server;
