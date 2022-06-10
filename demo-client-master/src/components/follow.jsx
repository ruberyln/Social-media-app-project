
import React, { useState } from "react";
//import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import {Stack, Button,IconButton,Link} from '@mui/material'
//import Followers from "./followers";
//import Following from "./following";

function Follow () {

return (
    <Stack
    sx={{ pt: 0.5 }}
    direction="row"
    spacing={10}
    justifyContent="center"
>
    <Stack direction="row" spacing={6} mt = {10}>
  
    <Button  variant="contained" color = "secondary" 
    component = {Link}
    href = {"/followers"}> Followers 
    </Button>
   
    <Button variant="contained" color = "secondary"
    component = {Link}
    href = {"/following"} >Following  </Button> 



 
    </Stack>
   
</Stack>
);
};

export default Follow