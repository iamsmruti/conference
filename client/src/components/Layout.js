import React, { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';

import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Avatar } from '@mui/material';
import Menu from '@mui/material/Menu';
import Tooltip from '@mui/material/Tooltip';

import { Drawer as AuthorDrawer } from './AuthorDrawer';
import { Drawer as AdminDrawer } from './AdminDrawer';
import { Drawer as ChairmanDrawer } from './ChairmanDrawer';
import { Drawer as ReviewerDrawer } from './ReviewerDrawer';

import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import { API } from '../constants';


const drawerWidth = 240;

const Layout = ({children, state, setState, setSubStateReviewer, setSubStateAuthor, setSubStateChairman, setSubStateAdmin}) => {
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const handleChange = (event) => {
      setState(event.target.value);
    };

    const handleOpenUserMenu = (event) => {
      setAnchorElUser(event.currentTarget);
    };
  
    const handleCloseUserMenu = () => {
      setAnchorElUser(null);
    };

    const navigate = useNavigate()

    const [roles, setRoles] = useState([])

    useEffect(() => {
      console.log(localStorage.getItem('token'))
      axios.get(`${API}/user/roles`, {
        headers: {
          token: localStorage.getItem('token')
        }
      }).then((res) => {
        console.log(res.data)
        setRoles(res.data)
      }).catch((err) => {
        console.log(err)
      })
    }, [])

    return (
        <Box sx={{ display: 'flex' }}>
          <CssBaseline />
          <AppBar
            position="fixed"
            sx={{
              width: { sm: `calc(100% - ${drawerWidth}px)` },
              ml: { sm: `${drawerWidth}px` },
            }}
          >
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: 'none' } }}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" noWrap component="div">
                Welcome, Smruti Ranjan
              </Typography>

              <Box sx={{ flexGrow: 1 }} />
              <FormControl sx={{ m: 1, minWidth: 120, color: 'white' }} size="small">
                <InputLabel sx={{color: 'white'}} id="demo-select-small">Role</InputLabel>
                <Select
                  labelId="demo-select-small"
                  id="demo-select-small"
                  value={state}
                  label="Age"
                  onChange={handleChange}
                  sx={{color: 'white',}}
                >
                  {roles?.map((role) => (
                    <MenuItem sx={{textTransform: 'capitalize'}} value={role}>{role}</MenuItem>
                  ))}
                </Select>
            </FormControl>

            <div className='ml-5'>
            <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={'top'}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
                <MenuItem onClick={() => { 
                  localStorage.removeItem('token')
                  navigate('/login')
                }}>
                  <Typography textAlign="center">Logout</Typography>
                </MenuItem>
            </Menu>
          </Box>
            </div>
            </Toolbar>
          </AppBar>
          <Box
            component="nav"
            sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
            aria-label="mailbox folders"
          >
            {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
            <Drawer
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
              sx={{
                display: { xs: 'block', sm: 'none' },
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
              }}
            >
              {state === "author" && <AuthorDrawer setSubStateAuthor={setSubStateAuthor}/>}
              {state === "admin" && <AdminDrawer setSubStateAdmin={setSubStateAdmin}/>}
              {state === "chairman" && <ChairmanDrawer setSubStateChairman={setSubStateChairman}/>}
              {state === "reviewer" && <ReviewerDrawer setSubStateReviewer={setSubStateReviewer}/>}
            </Drawer>
            <Drawer
              variant="permanent"
              sx={{
                display: { xs: 'none', sm: 'block' },
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
              }}
              open
            >
              {state === "author" && <AuthorDrawer setSubStateAuthor={setSubStateAuthor}/>}
              {state === "admin" && <AdminDrawer setSubStateAdmin={setSubStateAdmin}/>}
              {state === "chairman" && <ChairmanDrawer setSubStateChairman={setSubStateChairman}/>}
              {state === "reviewer" && <ReviewerDrawer setSubStateReviewer={setSubStateReviewer}/>}
            </Drawer>
          </Box>
          <Box
            component="main"
            sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
          >
            <Toolbar />
            {children}
          </Box>
        </Box>
    )
}

export default Layout