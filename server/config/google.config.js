import passport from "passport";
import googleOAuth from "passport-google-oauth20";

import {UserModel} from "../database/allModels";

const GoogleStrategy=googleOAuth.Strategy;

export default(passport) =>{
    passport.UserModel()
}
catch(error)
{
    done(error,null);
}
passport.serializeUser((userData,done)=>done(null,{.UserModel.}))
passport.deserializeUser((id,done)) =