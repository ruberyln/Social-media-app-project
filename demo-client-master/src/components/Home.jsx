import * as React from "react";
import {Link} from "@mui/material"
import commonApi from "../api/common";
import Toggle from "./toggle";
import { useState, useEffect } from "react";
import Post from "./Post";

// import commonApi from "../api/common";
//import Avatar from '@mui/material/Avatar'
//import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

//import CardContent from '@mui/material/CardContent';

//import Stack from '@mui/material/Stack';

import Drawer from "./drawer";

export default function Home() {
  //const [Images, setImage] = useState([]);
  const [posts, setPosts] = useState([]);
  const fetchPosts = async () => {
    await commonApi({
      action: "findAllPost",
      data: { data: {} },
    }).then((res) => {
      setPosts(res);
    });
  };
  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <>
      <Drawer />
     
<Toggle/>

      {posts.map((post) => {
        return <Post post={post} fetchPosts={fetchPosts} />;
      })}
    </>
  );
}
