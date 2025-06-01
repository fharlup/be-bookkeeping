import dotenv from "dotenv";

dotenv.config();

class Config {
    port: Number = Number(process.env.PORT) || 3000;
    dbUsername: string = process.env.DB_USERNAME || "root";
    dbPassword: string = process.env.DB_PASSWORD || "";
    dbName: string = process.env.DB_DATABASE
}

export default new Config;