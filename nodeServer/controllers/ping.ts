import { Router } from "express";
import { Request , Response } from "express";

const ping = async(req:Request,res:Response) => {
    try{
        return res.status(200).json()
    }catch(err){return res.status(500).json()}
}

const pingRouter = Router();

pingRouter.get('/',[],ping);

export { pingRouter };

