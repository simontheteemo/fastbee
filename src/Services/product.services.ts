// const httpStatus = require("http-status");
// const { User } = require("../models");
import { PrismaClient } from "@prisma/client";

// const ApiError = require("../utils/ApiError");
/**
 * Query for users
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */

// const queryProducts = async (filter, options) => {
//   const users = await User.paginate(filter, options);
//   return users;
// };

const prisma = new PrismaClient();

const getProductBySlug = async (slug: string) => {
  return prisma.products_product.findUnique({
    where: {
      slug: slug,
    },
  });
};

module.exports = {
  getProductBySlug,
};
