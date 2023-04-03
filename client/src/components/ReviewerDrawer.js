import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import AddTaskIcon from '@mui/icons-material/AddTask';

export const Drawer = ({setSubStateReviewer}) => {
  return (
    <div>
      <Toolbar />
      <List>
      <ListItem disablePadding>
            <ListItemButton onClick={() => setSubStateReviewer(1)}>
              <ListItemIcon>
                 <PendingActionsIcon />
              </ListItemIcon>
              <ListItemText primary={"Pending Requests"} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => setSubStateReviewer(2)}>
              <ListItemIcon>
                 <AddTaskIcon />
              </ListItemIcon>
              <ListItemText primary={"Reviewed"} />
            </ListItemButton>
          </ListItem>
      </List>
    </div>
)}