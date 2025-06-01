import { Sequelize } from "sequelize-typescript";
import config from "./config";
import { User } from "../model/user";

class Database {
    sequelize: Sequelize;
    constructor() {
        this.sequelize = new Sequelize(config.dbName, config.dbUsername, config.dbPassword, {
            host: "localhost",
            dialect: "mysql",
        });
    }

}

export default new Database();