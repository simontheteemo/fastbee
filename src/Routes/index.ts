import express from "express";

const productRoute = require("./product.routes");

const router = express.Router();

const defaultRoutes = [
  {
    path: "/",
    route: productRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
