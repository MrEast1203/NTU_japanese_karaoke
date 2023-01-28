import mongoose from "mongoose";
import dotenv from "dotenv-defaults";
import { dataInit } from "./upload";
dotenv.config();

export default {
  connect: () => {
    mongoose.set("strictQuery", false);
    mongoose
      .connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then((res) => {
        if (process.env.MODE === "Reset") {
          console.log("Reset DB");
          dataInit();
        }
        console.log("mongo db connection created");
      });
  },
};
