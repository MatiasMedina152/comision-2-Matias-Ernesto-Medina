import {config} from "dotenv"

config();

export const env = {
    PORT: process.env.PORT || 2000,
    JWT_SECRET: process.env.JWT_SECRET,
    MONGO_URI: process.env.MONGO_URI,
};