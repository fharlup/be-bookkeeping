import express from "express";
import database from "./config/database";
import { User } from "./model/user";

const app = express();

const PORT = 3000;

app.listen(PORT, async () => {
    try {
        console.log("Successfully connected to the database! Sequelize instance is ready.");
        // You can now use sequelizeInstance or Database.getInstance()
    } catch (error) {
        // If an error occurs during initialization (e.g., wrong credentials, DB down)
        console.error("Failed to connect to the database:", error);
    }
    console.log(`Runnin on port ${PORT}`);
})