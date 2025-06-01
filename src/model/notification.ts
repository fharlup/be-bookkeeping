import { DataTypes, ForeignKey, InferAttributes, InferCreationAttributes, Model } from "sequelize";
import { User } from "./user";
import database from "../config/database";

interface NotificationAttributes {
    notificationId: number,
    notificationType: string,
    readStatus: boolean,
    userId: number
}

class Notification extends Model<InferAttributes<Notification>, InferCreationAttributes<Notification>> {
    declare notificationId: number;
    declare notificationType: string;
    declare readStatus: boolean;
    declare userId: ForeignKey<User['id']>;
}

Notification.init({
    notificationId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    notificationType: {
        type: DataTypes.STRING
    },
    readStatus: {
        type: DataTypes.BOOLEAN
    },
    userId: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: "id"
        }
    }
}, {
    tableName: "Notifications",
    timestamps: true,
    sequelize: database.sequelize,
    modelName: "Notification",
});

Notification.belongsTo(User, {
    foreignKey: 'userId',
    targetKey: 'id',
    as: "user",
    onDelete: "CASCADE"
});

export { Notification, NotificationAttributes };

