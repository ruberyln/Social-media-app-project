import * as React from "react";
import { styled,  } from "@mui/material/styles";
import Box from "@mui/material/Box";
//import MuiDrawer from "@mui/material/Drawer";
//import MuiAppBar from "@mui/material/AppBar";
//import Toolbar from "@mui/material/Toolbar";
//import List from "@mui/material/List";
//import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
//import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
//import MenuIcon from "@mui/icons-material/Menu";
//import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
//import ChevronRightIcon from "@mui/icons-material/ChevronRight";
//import ListItem from "@mui/material/ListItem";
import Collapse from "@mui/material/Collapse";
import commonApi from "../api/common";
//import ListItemButton from "@mui/material/ListItemButton";
//import ListItemIcon from "@mui/material/ListItemIcon";
//import ListItemText from "@mui/material/ListItemText";
//import Link from "@mui/material/Link";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
//import HomeIcon from "@mui/icons-material/Home";
//import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
//import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
//import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
//import PowerSettingsNewOutlinedIcon from "@mui/icons-material/PowerSettingsNewOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Container from "@mui/material/Container";
import { useState,  } from "react";
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
import moment from "moment";
//import Stack from '@mui/material/Stack';
import { Context } from "../userContext/Context";
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));
const baseImageUrl="http://localhost:8060/public/"
function Post({ post, fetchPosts }) {
    const [expanded, setExpanded] = useState(false)
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const { createdBy, desc, createdAt, _id, comments ,images} = post;
  const { user } = React.useContext(Context);
let imgPath=""
if(images.length!==0)
{
  imgPath=baseImageUrl+images[0]
}
  const [comment, setComment] = useState("");

  const handleComment = async (e) => {
    e.preventDefault();
    let data = {
      comment: comment,
      userId: user._id,
      postId: _id,
    };

    await commonApi({
      action: "createComment",
      data: data,
    })
      .then((res) => {
        fetchPosts();
        setComment("");
      })
      .catch((error) => {
        console.error(error);
        console.error("Comment not added");
      });
  };
  return (
    <div>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Container component="main">
          <Card alignItems="center" justifyContent="center">
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                  R
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title={createdBy ? createdBy.userName : "John"}
              subheader={moment(createdAt).format("MMMM D, YYYY")}
            />
            <CardMedia
              component="img"
              height="500"
              image={imgPath}
                 
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {desc}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteBorderOutlinedIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ThumbDownOutlinedIcon />
              </IconButton>
              <Typography variant="h6">View Comments
              <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                {" "}
              
                <ExpandMoreIcon />
              </ExpandMore>
              </Typography>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>Comments</Typography>
                <Typography paragraph>
                  {comments.map((c) => {
                    return (
                      <div>
                        {c?.commentedBy?.userName}
                        <span>{"      "}</span>
                        {c.comment}
                      </div>
                    );
                  })}
                </Typography>
              </CardContent>
            </Collapse>

            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "50ch" },
              }}
            >
              <TextField
                id="outlined-basic"
                label="comment"
                variant="outlined"
                value={comment}
                onChange={(e) => {
                  setComment(e.target.value);
                }}
              >
                Comment
              </TextField>
            </Box>

            <Box
              m={1}
              //margin
              display="flex"
              justifyContent="flex-end"
              alignItems="flex-end"
              onClick={handleComment}
            >
              <Button>Post</Button>
            </Box>
          </Card>
        </Container>
      </Box>
    </div>
  );
}

export default Post;
