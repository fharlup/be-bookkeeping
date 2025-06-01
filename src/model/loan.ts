import { DataTypes, ForeignKey, InferAttributes, InferCreationAttributes, Model } from "sequelize";
import { User } from "./user";
import database from "../config/database";

interface LoanAttributes {
    loanId: number,
    assetType: string,
    assetCategory: string,
    amount: number,
    userId: number
}

class Loan extends Model<InferAttributes<Loan>, InferCreationAttributes<Loan>> {
    declare spendId: number;
    declare liabilityType: string;
    declare liabilityCategory: string;
    declare amount: number;
    declare userId: ForeignKey<User['id']>;
}

Loan.init({
    spendId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    liabilityType: {
        type: DataTypes.STRING
    },
    liabilityCategory: {
        type: DataTypes.STRING
    },
    amount: {
        type: DataTypes.DECIMAL(20, 2),
        validate: {
            min: {
                args: [0],
                msg: "Amount must be positive value"
            }
        }
    },
    userId: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: "id"
        }
    }
}, {
    tableName: "Loans",
    timestamps: true,
    sequelize: database.sequelize,
    modelName: "Loan",
});

Loan.belongsTo(User, {
    foreignKey: 'userId',
    targetKey: 'id',
    as: "user",
    onDelete: "CASCADE"
});

export { Loan, LoanAttributes };

