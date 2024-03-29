import React from "react";
import Navbar from "./components/navbar";

//import Container from "./components/Container"
import SignIn from "./components/signin";
import SignUp from "./components/signup";
//import Link from '@mui/material/Link';
import Profile from "./components/profile";
import Drawer from "./components/drawer";
import { Route, Routes } from "react-router-dom";
import SignOut from "./components/signout";
import Success from "./components/success";
//import Upload from "./components/upload";
import { useContext } from "react";
import { Context } from "./userContext/Context";
import Home from "./components/Home";
import CreatePost from "./components/Createpost";
import Following from "./components/following"
import Follow from "./components/follow";
import Followers from "./components/followers";
//import { Container } from '@mui/system';
//import Typography from '@mui/material/Typography';
<meta name="viewport" content="initial-scale=1, width=device-width" />;

function App() {
  const { user } = useContext(Context);
  return (
    <div>
     

      <Routes>
        <Route exact path="/upload" element={user ? <CreatePost /> : <SignIn />} />
        <Route
          exact
          path="/signout"
          element={user ? <SignOut /> : <SignIn />}
          />
          <Route
          exact
          path="/profile"
          element={user ? <Profile /> : <Profile />}
        />
          <Route
          exact
          path="/followers"
          element={user ? <Followers /> : <Followers />}
        />
         <Route
          exact
          path="/following"
          element={user ? <Following /> : <Following />}
        />
       
        <Route
          exact
          path="/success"
          element={user ? <Success /> : <SignIn />}
        />
         <Route
          exact
          path="/"
          element={user ? <Home /> : <SignIn />}
        />
        
        <Route exact path="/drawer" element={user ? <Drawer /> : <SignIn />} />
        <Route exact path="/signup" element={user ? <Drawer /> : <SignUp />} />
        <Route exact path="/signin" element={user ? <Drawer /> : <SignIn />} />

      </Routes>
    </div>
  );
}

export default App;