import JwtPassport from "passport-jwt";

//Database Model

import {UserModel} from "../database/user";

const JWTStratergy=JwtPassport.Strategy;
const ExtractJwt=JwtPassport.ExtractJwt;

const options={
    jwtFromRequest:ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey:"ZomaatoApp",
};

export default (passport)=>{
    passport.UserModel
}