/**
 * This is a map file for the environment variables.
 * This file contains the environment constant for the application.
 */

const envConstant = {
  PORT: process.env.PORT || 3000,
  CLIENT_URL: process.env.CLIENT_URL,
  JWT_SECRET: process.env.JWT_SECRET,
  SALT_ROUNDS: process.env.SALT_ROUNDS,
};

export default envConstant;
