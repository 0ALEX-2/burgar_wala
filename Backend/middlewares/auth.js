import ErrorHandler from "../utils/ErrorHandler.js";

export const isAuthenticated = (req, res, next) => {
  const token = req.cookies["connect.sid"];

  if (!token) {
    return next(new ErrorHandler("Not logged in", 401));
  }
  next();
};

export const authorizeAdmin = (req, res, next) => {
  if (req.user.role !== "admin") {
    return next(new ErrorHandler("Only admin allowed", 405));
  }
  next();
};
 
