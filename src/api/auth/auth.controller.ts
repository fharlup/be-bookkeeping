import { NextFunction, Request, Response } from "express";
import { User } from "../../model/user";
import { StatusCodes } from "http-status-codes";

class AuthController {
    public async register(req: Request, res: Response, next: NextFunction) {
        try {
            console.log(req.body)
            const { name, email, password, role } = req.body;

            const result = await User.create({ name, email, password, role });

            // console.log(result);
            return res.status(StatusCodes.CREATED).json({
                status: true,
                message: "Registration Success",
                data: result
            });
        } catch (err) {
            next(err);
        }
    }
}

export default new AuthController;