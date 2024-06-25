import mongoose from "mongoose";

const connectMongoDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URI);
    console.log("connected to MONGO-DB");
  } catch (error) {
    console.log("Error Connecting to MongoDB", error.message);
  }
};

export default connectMongoDb;
