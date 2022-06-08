
import React, { useState } from "react";
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import {Stack, Button,IconButton} from '@mui/material'


function Follow () {
const [follow , setfollow] = useState (2000)

const [followactive, setfollowactive] =useState(false)

function followf(){
    if(followactive){
        setfollowactive (false)
        setfollow(follow-1)

    }else{
        setfollowactive(true)
        setfollow(follow+1)
    }
}
return (
    <Stack
    sx={{ pt: 0.5 }}
    direction="row"
    spacing={10}
    justifyContent="center"
>
    <Button  variant="outlined" color = "secondary">Followers {follow} </Button>
    <Button variant="outlined" color = "secondary">Following </Button>
    <IconButton onClick = {followf} variant="outlined" color = "secondary" ><PersonAddAlt1Icon/> </IconButton>

   
</Stack>
);
};

export default Follow