import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connections = {};

export const connectToBlacklistDB = async () => {
  if (connections.blacklist) return connections.blacklist;
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI_BLACKLIST, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      ssl: true,
      tlsAllowInvalidCertificates: true, // for dev only
    });
    console.log("✅ Connected to Blacklist DB");
    connections.blacklist = mongoose.connection;
    return mongoose.connection;
  } catch (err) {
    console.error("❌ Blacklist DB connection error:", err);
    throw err;
  }
};

export const connectToCachedDB = async () => {
  if (connections.cached) return connections.cached;
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI_CACHED, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      ssl: true,
      tlsAllowInvalidCertificates: true, // for dev only
    });
    console.log("✅ Connected to Cached DB");
    connections.cached = mongoose.connection;
    return mongoose.connection;
  } catch (err) {
    console.error("❌ Cached DB connection error:", err);
    throw err;
  }
};

export const connectToWhitelistDB = async () => {
  if (connections.whitelist) return connections.whitelist;
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI_WHITELIST, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      ssl: true,
      tlsAllowInvalidCertificates: true, // for dev only
    });
    console.log("✅ Connected to Whitelist DB");
    connections.whitelist = mongoose.connection;
    return mongoose.connection;
  } catch (err) {
    console.error("❌ Whitelist DB connection error:", err);
    throw err;
  }
};
