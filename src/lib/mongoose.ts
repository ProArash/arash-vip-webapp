import mongoose from 'mongoose';

const DB_URL = process.env.DB_URL;

if (!DB_URL) throw new Error('invalid database url.');

declare global {
	var mongooseCache: {
		conn: typeof mongoose | null;
		promise: Promise<typeof mongoose> | null;
	};
}

let cached = global.mongooseCache;

if (!cached) cached = { conn: null, promise: null };

async function connectDb(): Promise<typeof mongoose> {
	if (cached.conn) return cached.conn;
	if (!cached.promise) {
		cached.promise = mongoose.connect(DB_URL!).then((mongoInstance) => {
			return mongoInstance;
		});
	}

	try {
		cached.conn = await cached.promise;
	} catch (error) {
		cached.promise = null;
		throw error;
	}
	return cached.conn;
}

export default connectDb;
