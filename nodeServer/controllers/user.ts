import { Router } from "express";
import { Request , Response } from "express";
import * as jwt from 'jsonwebtoken';

interface user { token:string } ;

const user = async(req:Request,res:Response) => {
    try{

        const token = req.header('token');
        if(token){
            jwt.
        }

        return res.status(200).json({logged:true})
    }catch(err){return res.status(500).json({logged:false})}
}

const userRouter = Router();

userRouter.get('/',[],user);

export { userRouter };

