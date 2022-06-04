const express = require("express");
const cors = require("cors");
const app = express();

console.log("hello");
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`at port ${port}`));
