//Libraries

import express, { Router } from "express";
import passport from "passport";

//Database modal

import { RestaurantModel } from "../../database/restaurant";


/*
Route /
Des
 */

Router.get("/:id",async(req,res)=>{
 try{
     const{_id}=req.params;
     const restaurant=await RestaurantModel.findOne(_id);
     if(!restaurant)
      return res.status(404).json({error:"Restaurant not found"});
      
 }
});