const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const errorHandler = require("./middleware/errorHandler");
const registerRoute = require("./auth-routes/registerRoute");
const loginRoute = require("./auth-routes/loginRoute");

const app = express();

app.get("/", function(req, res) {
  res.send("Hello World!");
});

app.use(helmet());
app.use(cors());
app.use(express.json());

app.use("/", registerRoute);
app.use("/", loginRoute);

app.use(errorHandler);

app.listen(8080, function() {
  console.log("Example app listening on port 8080!");
});
