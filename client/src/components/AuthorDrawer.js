import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import RestorePageIcon from '@mui/icons-material/RestorePage';
import PostAddIcon from '@mui/icons-material/PostAdd';
import ArticleIcon from '@mui/icons-material/Article';

export const Drawer = ({setSubStateAuthor}) => {
    return (
        <div>
          <Toolbar />
          <List>
              <ListItem disablePadding>
                <ListItemButton onClick={() => setSubStateAuthor(1)}>
                  <ListItemIcon>
                    <ArticleIcon />
                  </ListItemIcon>
                  <ListItemText primary={"Accepted Proposals"} />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton onClick={() => setSubStateAuthor(2)}>
                  <ListItemIcon>
                    <RestorePageIcon />
                  </ListItemIcon>
                  <ListItemText primary={"Pending Proposals"} />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton onClick={() => setSubStateAuthor(3)}>
                  <ListItemIcon>
                    <PostAddIcon />
                  </ListItemIcon>
                  <ListItemText primary={"Submit a Proposal"} />
                </ListItemButton>
              </ListItem>
          </List>
        </div>
    )
}