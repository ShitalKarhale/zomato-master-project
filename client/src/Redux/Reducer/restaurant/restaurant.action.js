import axios from "axios";

//Redux types
import {GET_RESTAURANT} from "./restaurant.type";

export const getRestaurant=()=>async(dispatch)=>{
    const restaurantList=await axios({
        method:"GET";
        url=""
    })
}