

const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    
    const connectionString = `mongodb+srv://vivek:vivek12345@cluster0.u5f7e.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`; 
    await mongoose.connect(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected...");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
    process.exit(1); // Exit with an error code
  }
};

module.exports = connectDB;
