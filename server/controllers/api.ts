import { Response, Request, NextFunction } from "express";
import {MyType} from "../../types/general";

export function getVersionApi(req: Request, res: Response, next: NextFunction) {
    res.send({
        version: '1.00'
    })
    const type: MyType = {name: 's'};
}
