
/*
Route:/food
Des:Add new food review/rating
params:_id,_foodID
Access:public
Method:POST
*/
Router .post("/food/new/:_userID/

")

Router.delete("/delete/:id",async(req,res)=>{

    try{
        const {_id}=req.params;
        await ReviewModel.findByIdAndDelete(_id);
        return res.json
    }
});