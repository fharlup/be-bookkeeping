import { CreationOptional, DataTypes, ForeignKey, InferAttributes, InferCreationAttributes, Model } from "sequelize";
import database from "../config/database";
import { User } from "./user";

interface RevenueAttributes {
    revenueId: number,
    type: string,
    amount: number,
    userId: number,
}

class Revenue extends Model<InferAttributes<Revenue>, InferCreationAttributes<Revenue>> {
    declare revenueId: CreationOptional<number>;
    declare type: string;
    declare amount: number;
    declare userId: ForeignKey<User['id']>;
}

Revenue.init({
    revenueId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    type: {
        type: DataTypes.STRING,
    },
    amount: {
        type: DataTypes.INTEGER,
    },
    userId: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: "id"
        }
    }
}, {
    tableName: "Revenues",
    timestamps: true,
    sequelize: database.sequelize,
    modelName: "Revenue",
});

Revenue.belongsTo(User, {
    foreignKey: 'userId',
    targetKey: 'id',
    as: "user",
    onDelete: "CASCADE"
});

export { Revenue, RevenueAttributes };