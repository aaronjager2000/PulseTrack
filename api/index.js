<<<<<<< HEAD
import express from 'express';
=======
const express = require("express");
>>>>>>> 5704bba363f75b9c7ec10896fc90bfd432e51f97
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use((req, res, next) => {
  console.log(`${req.method} request for ${req.url}`);
  next();
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
