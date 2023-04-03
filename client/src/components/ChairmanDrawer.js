import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import PublishedWithChangesIcon from '@mui/icons-material/PublishedWithChanges';
import UnpublishedIcon from '@mui/icons-material/Unpublished';

export const Drawer = ({setSubStateChairman}) => {
return (
    <div>
      <Toolbar />
      <List>
          <ListItem disablePadding>
            <ListItemButton onClick={() => setSubStateChairman(1)}>
              <ListItemIcon>
                 <UnpublishedIcon />
              </ListItemIcon>
              <ListItemText primary={"Pending Approvals"} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => setSubStateChairman(2)}>
              <ListItemIcon>
                 <PublishedWithChangesIcon />
              </ListItemIcon>
              <ListItemText primary={"Published"} />
            </ListItemButton>
          </ListItem>
      </List>
    </div>
)}