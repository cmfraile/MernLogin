import { Router } from "express";
import { Request , Response } from "express";
import axios from "axios";
import * as jwt from 'jsonwebtoken';

interface decode {email:string,given_name:string,picture:string}
const jwtSign = ({email,given_name,picture}:decode) => {
    const secret:any = process.env.JWTKEY;
    const token = jwt.sign({email,given_name,picture},secret,{expiresIn:'1h'});
    const bundle = {
        user:{email,name:given_name,picture},
        token
    };
    return bundle
};
const userInfoQuery = async(token:string):Promise<any> => axios.get("https://www.googleapis.com/oauth2/v3/userinfo",{headers: {"Authorization": `Bearer ${token}`}});

const googleUser = async(req:Request,res:Response) => {
    
    const tokenError = () => res.status(403).json({error:'el token de usuario de google no se encuentra o no es válido'});

    try{

        const token = req.header('token');
        if(!token){return tokenError()};
        userInfoQuery(token)
        .then(({data}) => {return res.status(200).json(jwtSign(data))})
        .catch(console.log);

    }catch(err){return res.status(500).json()};

}

const checkToken = async(req:Request,res:Response) => {

    const secret:any = process.env.JWTKEY;
    const token = req.header('token');

    try{
        jwt.verify(`${token}`,secret,(err:any,{user,token}:any) => {
            if(err){return res.status(403).json({validToken:false})};
            if(token){return res.status(200).json(jwtSign(user))};
        })
    }catch(err){return res.status(500).json()}

}

const userRouter = Router();
userRouter.post('/google',[],googleUser);
userRouter.post('/checkToken',[],checkToken);

export { userRouter };

