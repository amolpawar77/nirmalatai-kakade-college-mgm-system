import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    if (!process.env.MONGO_URI) {
      throw new Error('MONGO_URI is not defined in environment variables.');
    }

    const conn = await mongoose.connect(process.env.MONGO_URI, {
      // Connection pool configuration for traditional long-running server
      maxPoolSize: 10,
      minPoolSize: 5,
      maxIdleTimeMS: 60000, // 1 minute
      connectTimeoutMS: 10000, // 10 seconds
      socketTimeoutMS: 45000, // 45 seconds
      serverSelectionTimeoutMS: 5000, // 5 seconds
      // Retry logic
      retryWrites: true,
      retryReads: true,
      // Other optimizations
      family: 4, // Use IPv4
    });

    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
    return conn;
  } catch (error) {
    console.error(
      `❌ Database connection error: ${error instanceof Error ? error.message : error}`
    );
    // Don't throw - let the app start even if DB fails temporarily
    // It will retry on next request
    process.exit(1);
  }
};

export default connectDB;
