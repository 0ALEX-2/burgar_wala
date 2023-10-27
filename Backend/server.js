import app from "./app.js";
import { connectDB } from "./config/database.js";
import Razorpay from "razorpay";

connectDB();

export const instance = new Razorpay({
  key_id: process.env.RAZORPAY_API_KEY,
  key_secret: RAZORPAY_API_SECRET,
});

app.get("/", (req, res, next) => {
  res.send("<h1>Working</h1>");
});

app.listen(process.env.PORT, () =>
  console.log(`Server is running on PORT:${process.env.PORT}`)
);
