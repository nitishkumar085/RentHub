import mongoose from "mongoose";

const dataBaseConnection = async () => {
  try {
    // If already connected, return the existing connection
    
    if (mongoose.connection.readyState >= 1) {
      return;
    }

    const connectionLink = process.env.DB_CONNECTION.replace(
      "<password>",
      process.env.PASSWORD
    );

    await mongoose.connect(connectionLink);

    console.log("Connected to DB");
  } catch (err) {
    console.error("Database connection error:", err);
    throw err;
  }
};

export default dataBaseConnection;