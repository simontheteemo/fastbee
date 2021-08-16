import express from "express";
import { Request, Response } from "express";
const routes = require("./Routes/index");

const app = express();
app.use("/products", routes);

app.listen(3000, () => {
  console.log("Application started on port 3000!");
});
