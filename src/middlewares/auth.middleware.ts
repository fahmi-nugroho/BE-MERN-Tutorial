import {Request, Response, NextFunction} from "express";
import {getUserData, IUserToken} from "../utils/jwt";

export interface IReqUser extends Request {
    user?: IUserToken
}

export default (req: Request, res: Response, next: NextFunction) => {
    const authorization = req.headers?.authorization;

    if (!authorization) {
        res.status(403).json({
            message: "unauthorized",
            data: null
        });
        return
    }

    const [prefix, accessToken] = authorization.split(' ');

    if (!(prefix === 'Bearer' && accessToken)) {
        res.status(403).json({
            message: "unauthorized",
            data: null
        });
        return
    }

    const user = getUserData(accessToken)

    if (!user) {
        res.status(403).json({
            message: "unauthorized",
            data: null
        });
        return
    }

    (req as IReqUser).user = user
    next()
}