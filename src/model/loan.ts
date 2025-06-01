import { DataTypes, ForeignKey, InferAttributes, InferCreationAttributes, Model } from "sequelize";
import { User } from "./user";
import database from "../config/database";

interface LoanAttributes {
    loanId: number,
    amount: number,
    loanStart: Date,
    loanEnd: Date,
    interestRate: number,
    status: string,
    userId: number
}

class Loan extends Model<InferAttributes<Loan>, InferCreationAttributes<Loan>> {
    declare loanId: number;
    declare amount: number;
    declare loanStart: Date;
    declare loanEnd: Date;
    declare interestRate: number;
    declare status: string;
    declare userId: number;
}

Loan.init({
    loanId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
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
    loanStart: {
        type: DataTypes.DATE
    },
    loanEnd: {
        type: DataTypes.DATE
    },
    interestRate: {
        type: DataTypes.DECIMAL(10, 2),
    },
    status: {
        type: DataTypes.STRING
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

