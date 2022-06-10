import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import  Drawer  from './drawer';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import { Container,Box,Stack,IconButton,Grid } from '@mui/material';
export default function Followers() {

    const lists = [1,2,3]
  return (
      <><Drawer/>
      <Container component ="main">
     
           <Box
          sx={{
            marginTop: 11,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
      <Typography variant = "h6">FOLLOWERS
      </Typography>
      <Grid >
            {lists.map((list) => (
              <Grid item key={list} xs={12} >
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', mt:'4' }}>
          <ListItem alignItems="flex-start">
          
              <ListItemAvatar>
                  
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                
                 
              </ListItemAvatar>
            
              <ListItemText

                  secondary={<React.Fragment>
                      <Typography
                          sx={{ display: 'inline' }}
                          component="span"
                          variant="body2"
                          color="text.primary"
                      >
                          Ali Connors
                      </Typography>
                      <IconButton color = "secondary"> <PersonAddAlt1Icon/></IconButton>
                  </React.Fragment>} />
               
          </ListItem>
          <Divider variant="inset" component="li" />
          
          
      </List>
      </Grid>
            ))}
            </Grid>
     </Box>
    
      </Container></>
  );
}
