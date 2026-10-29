export const errorHandler = (err, req, res, next) => {
  console.error(err);

  const statusCode = err.statusCode || 500;

  if (process.env.ENVIRONMENT === "development" || process.env.ENVIRONMENT === "production") {
    res.status(statusCode).json({
        message: err.message || "Internal Server Error",
    });
  } else {
    res.status(statusCode).json({
        message: "Something went wrong :(",
    });
  }
};