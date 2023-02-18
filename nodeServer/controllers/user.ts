import { Router } from "express";
import { Request , Response } from "express";
import axios from "axios";
import * as jwt from 'jsonwebtoken';

const secret:any = process.env.JWTKEY;

const userInfoQuery = async(token:string):Promise<string> => await axios.get("https://www.googleapis.com/oauth2/v3/userinfo",{headers: {"Authorization": `Bearer ${token}`}});

const googleUser = async(req:Request,res:Response) => {

    try{
        const token = req.header('token');
        if(!token){return res.status(403).json({error:'el token de usuario de google no se encuentra o no es válido'})};
        await userInfoQuery(token).then(console.log);
        return res.status(200).json({});
    }catch(err){return res.status(500).json()};

}

const userRouter = Router();
userRouter.post('/google',[],googleUser)

export { userRouter };

/*
userRouter.get('/',[],checkOldToken);
userRouter.get('/',[],registerOrLogin);
*/

