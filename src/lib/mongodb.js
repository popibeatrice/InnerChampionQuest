import mongoose from "mongoose";

export default async function connectDB() {
  try {
    if (mongoose.connection.readyState === 0) {
      await mongoose.connect(process.env.MONGODB_URI);
    }
  } catch (err) {
    console.log(err);
  }
}
