import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import Collapse from "@mui/material/Collapse";
import commonApi from "../api/common";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Link from "@mui/material/Link";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import HomeIcon from "@mui/icons-material/Home";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import PowerSettingsNewOutlinedIcon from "@mui/icons-material/PowerSettingsNewOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Container from "@mui/material/Container";
import { useState, useEffect } from "react";
import Post from "./Post";
// import commonApi from "../api/common";
//import Avatar from '@mui/material/Avatar'
//import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import ThumbDownOutlinedIcon from "@mui/icons-material/ThumbDownOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import Card from "@mui/material/Card";
import Avatar from "@mui/material/Avatar";
import { red } from "@mui/material/colors";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
//import CardContent from '@mui/material/CardContent';
import { CardHeader, CardActions, CardContent } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
//import Stack from '@mui/material/Stack';

import MiniDrawer from "./drawer";
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
      <MiniDrawer />
      {posts.map((post) => {
        return <Post post={post} fetchPosts={fetchPosts} />;
      })}
    </>
  );
}
