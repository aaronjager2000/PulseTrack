import express from 'express';

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
