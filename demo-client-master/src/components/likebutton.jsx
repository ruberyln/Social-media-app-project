import React, { useState } from "react";

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
//import FavoriteIcon from '@mui/icons-material/Favorite';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import { Button } from "@mui/material";

function LikeButton () {

const [like,setlike] =useState(0)
const [dislike,setdislike] =useState(0)


const [likeactive,setlikeactive] =useState(false)
const [dislikeactive,setdislikeactive] =useState(false)

function likef() {
if (likeactive) {
    setlikeactive(false)
    setlike(like-1)
    

}else {
    setlikeactive(true)
    setlike(like+1)
    if(dislikeactive){
        setdislikeactive(false)
        setlike(like+1)
        setdislike(dislike-1)
    }
}

}
function dislikef() {
    if (dislikeactive) {
        setdislikeactive(false)
        setdislike(dislike-1)
        
    
    }
    else {
        setdislikeactive(true)
        setdislike(dislike+1)

        if(likeactive){
            setlikeactive(false)
            setdislike(dislike+1)
            setlike(like-1)
        }
    }
}
return (

    <><Button onClick = {likef} color = "secondary">
       < FavoriteBorderIcon/>
     {like} </Button>
        <Button onClick = {dislikef}  color ="secondary" > 
         <ThumbDownIcon />  {dislike} </Button></>

);
};
        export default LikeButton