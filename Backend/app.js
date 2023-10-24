import express from "express";
import dotenv from "dotenv";
import { connectPassport } from "./utils/Provider.js";
import session from "express-session";
import cookieParser from "cookie-parser";
import userRoute from "./routes/userRoute.js";
import passport from "passport";
import { errorMiddleware } from "./middlewares/errorMiddleware.js";

const app = express();
export default app;
dotenv.config({
  path: "./config/config.env",
});

//Midlewares
app.use(cookieParser);
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.authenticate("session"));
app.use(passport.initialize());
app.use(passport.session());

connectPassport();

app.use("/api/v1", userRoute);

//Error middleware
app.use(errorMiddleware);


