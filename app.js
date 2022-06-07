const express = require("express");
const cors = require("cors");
const session = require("express-session");
const bodyParser = require("body-parser");
const app = express();

const corsOption = {
  origin: [
    "http://127.0.0.1:3000",
    "http://localhost:3000",
    "http://localhost:8080",
    "https://sarallagani.com",
    "https://thirsty-franklin-65be75.netlify.app",
  ],
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  exposedHeaders: ["*"],
};
app.use(cors(corsOption));
app.use(bodyParser.json());
app.use(express.json());
const product = require("./routes/product");
app.get("/", (req, res) => {
  res.send("Working !");
});
app.use("/product", product);

app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  res.status(err.status || 500);
  //  res.send({ "status": err.status, "message": err.message, "success": false, "error":err.error });
  res.render("error");
});
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`at port ${port}`));
