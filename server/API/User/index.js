import express from "express";
import passport from "passport";

//Database modal
import {UserModel} from "../../database/allModels";

const Router=express.Router();

Router.get("/:_id",async(req,res)=>{

    try{
        const{_id}=reqy.params;
        const getUser=await UserModel.findById(_id);

        return res.json({user:getUser});
    }
    catch(error){
        return res.status(500).json({error:error.message});
    }
});

Router.put("/update/:_id",async(req,res)=>{

    try
    {
        const{_id}=req.params;
        const {userDara}=req.body;
        _id:
        const updateUserData=await UserModel.findByIdAndUpdate
    }

});