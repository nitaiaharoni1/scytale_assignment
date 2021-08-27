import dotenv from 'dotenv';

dotenv.config();

export const DB_CONNECTION = `mongodb+srv://${process.env.MONGO_DB_USERNAME}:${process.env.MONGO_DB_PASSWORD}@scytaleassignmentmongo.pqram.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`