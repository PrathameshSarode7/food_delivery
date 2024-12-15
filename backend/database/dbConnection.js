import mongoose from 'mongoose';

export const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      dbName: "RESAURT", // Ensure the name is exactly as intended
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB database successfully.");
  } catch (err) {
    console.error("Error connecting to the database:", err.message); // Capture error message
    process.exit(1); // Exit process with failure
  }
};
