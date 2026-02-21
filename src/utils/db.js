import mongoose from "mongoose";

const connect = async () => {
  if (mongoose.connection.readyState >= 1) {
    return;
  }

  try {
    if (!process.env.MONGO) {
      throw new Error("Missing MONGO environment variable. Add it to .env.local");
    }

    await mongoose.connect(process.env.MONGO);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error; // Important: re-throw so API knows it failed
  }
};

export default connect;