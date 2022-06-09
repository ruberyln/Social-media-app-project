import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import  Drawer  from './drawer';
import { Container,Box } from '@mui/material';
export default function Followers() {

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

                  </React.Fragment>} />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
              <ListItemAvatar>
                  <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
              </ListItemAvatar>
              <ListItemText

primary={<React.Fragment>
    <Typography
        sx={{ display: 'inline' }}
        component="span"
        variant="body2"
        color="text.primary"
    >
      Tim
    </Typography>

                

                  </React.Fragment>} />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
              <ListItemAvatar>
                  <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
              </ListItemAvatar>
              <ListItemText

                  primary={<React.Fragment>
                      <Typography
                          sx={{ display: 'inline' }}
                          component="span"
                          variant="body2"
                          color="text.primary"
                      >
                          Sandra Adams
                      </Typography>

                  </React.Fragment>} />
          </ListItem>
      </List>
     </Box>
      </Container></>
  );
}