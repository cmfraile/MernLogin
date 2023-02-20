import { Router } from "express";
import { Request , Response } from "express";
import axios from "axios";
import * as jwt from 'jsonwebtoken';

const userInfoQuery = async(token:string):Promise<any> => axios.get("https://www.googleapis.com/oauth2/v3/userinfo",{headers: {"Authorization": `Bearer ${token}`}});
const googleUser = async(req:Request,res:Response) => {

    const secret:any = process.env.JWTKEY;
    const tokenError = () => res.status(403).json({error:'el token de usuario de google no se encuentra o no es válido'});
    const jwtSign = ({email,given_name,picture}:any) => {
        const token = jwt.sign({email,given_name,picture},secret,{expiresIn:'1h'});
        const bundle = {
            user:{email,name:given_name,picture},
            token
        };
        return res.status(200).json(bundle);
    }

    try{

        const token = req.header('token');
        if(!token){return tokenError()};
        userInfoQuery(token)
        .then(({data}) => {jwtSign(data)})
        .catch(console.log);

    }catch(err){return res.status(500).json()};

}

const checkToken = async(req:Request,res:Response) => {

    const secret:any = process.env.JWTKEY;
    const token = req.header('token');

    try{
        jwt.verify(`${token}`,secret,(err:any,decode:any) => {
            if(err){return res.status(200).json({validToken:true})};
            if(decode){return res.status(200).json({validToken:false})};
        })
    }catch(err){return res.status(500).json()}

}

const userRouter = Router();
userRouter.post('/google',[],googleUser)
userRouter.get('/checkToken',[],checkToken)

export { userRouter };

