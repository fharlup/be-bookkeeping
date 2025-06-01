import { Model, InferAttributes, InferCreationAttributes, CreationOptional } from 'sequelize';
import database from "../config/database";
import { DataType, Table } from 'sequelize-typescript';
interface UserAttributes {
    id: number;
    name: string;
    email: string;
    password: string;
    role: string;
    createdAt?: Date;
    updatedAt?: Date;
}

class User extends Model<InferAttributes<User>, InferCreationAttributes<User>> {
    declare id: CreationOptional<number>;
    declare name: string;
    declare email: string;
    declare password: string;
    declare role: string
    declare readonly createdAt: CreationOptional<Date>;
    declare readonly updatedAt: CreationOptional<Date>;
}

User.init(
    {
        id: {
            type: DataType.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataType.STRING,
            allowNull: false,
        },
        email: {
            type: DataType.STRING,

        },
        password: '',
        role: '',
        createdAt: '',
        updatedAt: '',

    },
    {
        tableName: "Users",
        timestamps: true,
        sequelize: database.sequelize,
        modelName: "User"
    }
);

export { User, UserAttributes };