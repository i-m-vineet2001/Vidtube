import dotenv from "dotenv"
import { app } from "./app.js";
import { connect } from "mongoose";
import connectDB from "./db/index.js";

dotenv.config({
  path:"./.env"
})

const PORT = process.env.PORT||8001;

connectDB()
.then(()=>{
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
})
.catch((error) => {
  console.error("Database connection error:", error);
  process.exit(1);
}
);
