// const httpStatus = require("http-status");
// const pick = require("../utils/pick");
// const ApiError = require("../utils/ApiError");
// const catchAsync = require("../utils/catchAsync");
const { productService } = require("../Services/index");

// const getProducts = catchAsync(async (req: any, res: any) => {
//   const filter = pick(req.query, ["name", "role"]);
//   const options = pick(req.query, ["sortBy", "limit", "page"]);
//   const result = await productService.queryProducts(filter, options);
//   res.send(result);
// });

// const getProduct = catchAsync(async (req: any, res: any) => {
//   const product = await productService.getProductById(req.params.slug);
//   if (!product) {
//     throw new ApiError(httpStatus.NOT_FOUND, "Product not found");
//   }
//   res.send(product);
// });

// const getProducts = async (req: any, res: any) => {
//   const result = await productService.queryProducts();
//   res.send(result);
// };

const getProduct = async (req: any, res: any) => {
  console.log("start getting product");
  const product = await productService.getProductBySlug(req.params.slug);
  res.send(product);
};

module.exports = {
  //   getProducts,
  getProduct,
};
