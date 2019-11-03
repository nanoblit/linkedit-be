import express from "express";
const app = express();

import errorHandler from "./middleware/errorHandler";

app.get("/", function(req, res) {
  res.send("Hello World!");
});

app.use(errorHandler);

app.listen(8080, function() {
  console.log("Example app listening on port 8080!");
});
