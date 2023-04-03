import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import { Divider } from '@mui/material';
import ArticleIcon from '@mui/icons-material/Article';
import StickyNote2Icon from '@mui/icons-material/StickyNote2';

export const Drawer = ({setSubStateAdmin}) => {
  return (
    <div>
      <Toolbar />
      <List>
          <ListItem disablePadding>
            <ListItemButton onClick={() => setSubStateAdmin(1)}>
              <ListItemIcon>
                 <ManageAccountsIcon />
              </ListItemIcon>
              <ListItemText primary={"Manage Roles"} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => setSubStateAdmin(2)}>
              <ListItemIcon>
                 <PersonAddAltIcon />
              </ListItemIcon>
              <ListItemText primary={"Create Users"} />
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem disablePadding>
            <ListItemButton onClick={() => setSubStateAdmin(3)}>
              <ListItemIcon>
                 <ArticleIcon />
              </ListItemIcon>
              <ListItemText primary={"Published Papers"} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => setSubStateAdmin(4)}>
              <ListItemIcon>
                 <StickyNote2Icon />
              </ListItemIcon>
              <ListItemText primary={"Pending Papers"} />
            </ListItemButton>
          </ListItem>
      </List>
    </div>
)}