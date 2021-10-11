import mongoose from "mongoose";

const ImageModel=new mongoose.Schema({

    images:[
        {
          location:{type:String,required:true},
        },

    ],
}
,
{
  timestamps:true, 
}
);
export const ImageModel=mongoose.model("Images",ImageSchema);