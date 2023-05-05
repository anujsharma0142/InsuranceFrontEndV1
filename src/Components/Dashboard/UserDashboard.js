// Importing required modules and libraries
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import TabContext from '@mui/lab/TabContext';
import TabPanel from '@mui/lab/TabPanel';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import {HomeFilled ,AccountBookOutlined, InsuranceOutlined, SettingOutlined, QuestionCircleOutlined, UsergroupAddOutlined, UserOutlined } from '@ant-design/icons';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import axios from 'axios';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../Images/monoceptlogo.png';
import AvatarItem from '../Avatar/Avatar';
import NotificationItem from '../Avatar/Notification';
import '../../App.css';
import DashboardIcon from "@material-ui/icons/Dashboard";
import DashboardComp from '../TabComponent/Dashboard/Dashboard';
import jwt from 'jwt-decode';
import { Spin } from 'antd';
import Profile from './Cards/UserCards/Profile';
import InsurancePlan from './Cards/UserCards/InsurancePlan';
import CustQueries from './Cards/UserCards/CustQueries';
// import styled from '@mui/material/styles/styled';
// import ManagerTable from '../TabComponent/Tabel/ManagerTable';
// import ResourceTable from '../TabComponent/Tabel/ResourceTable';
// import HistoryTable from '../TabComponent/Tabel/History';
// The above script imports all the necessary modules and libraries required for code to run.

const drawerWidth = 150; // Sets the drawerWidth constant to 150.

// Defines a mixin called "openedMixin" that takes a theme argument
const openedMixin = (theme) => ({
  // Sets the width of the object using previously defined drawerWidth constant.
  width: drawerWidth,
  // Applies a transition effect to the width property, with a specified easing function and duration
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  // Hides any content that overflows horizontally
  overflowX: 'hidden',
});
// Define a mixin for when the drawer is closed
const closedMixin = (theme) => ({
  // Here, we are defining the CSS transition property for the 'width' property to animate it when it changes.
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  // Here, we are setting the 'overflowX' property of the element to 'hidden' so that any content that exceeds the width is hidden.
  overflowX: 'hidden',
  // Here, we are defining the initial width of the element using the 'calc' function and spacing from the theme object.
  width: `calc(${theme.spacing(4)} + 1px)`,
  // Here, we are providing an override for the width on larger screens using a media query from the theme object.
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(6)} + 1px)`,
  },
});

// Define a component named `DrawerHeader` which is created using the styled method from the `styled-components` library within JavaScript.
const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex', // Displays the container as a flex container, allowing easy alignment of child elements.
  alignItems: 'center', // Vertically centers child elements within the container.
  justifyContent: 'flex-end', // Horizontally aligns child elements to the end of the container.
  padding: `${theme.spacing(0)} ${theme.spacing(1)}`, // Provides equal padding on the top/bottom and left/right of the container.
  minHeight: '64px', // Sets the minimum height of the container to 64 pixels.
}));



const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

// Define a styled component named "Drawer" based on MuiDrawer from Material-UI.
const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  // Exclude the "open" prop from being passed down to the underlying component.
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    // Use the openedMixin styles if the 'open' prop is true
    ...(open && {
        ...openedMixin(theme),
        "& .MuiDrawer-paper": openedMixin(theme),
    }),
    // Use the closedMixin styles if the 'open' prop is false
    ...(!open && {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": closedMixin(theme),
    }),
}));

export default function UserDashboard() {
  // Define state variables
  const [loading, setLoading] = useState(true);
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [tabValue, setValue] = React.useState("1");
  const [name, setName] = useState("");

  // This function takes an index (idx) as an argument and sets the value of a state variable to that index
  const handleDrawerLinks = (idx) => {
    setValue(idx);
  };

  // This function sets a state variable (open) to true, which will open a drawer component
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  // This function sets a state variable (open) to false, which will close a drawer component
  const handleDrawerClose = () => {
    setOpen(false);
  };
 // Define a function to fetch data from the backend API
  const fetchData = () => {
      // call your apis here
      setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);
  
  return (
    <div>
      {loading ? (
        <div size="middle" style={{ 'height': '100vh', 'display': 'flex', 'alignItems': 'center', 'justifyContent': 'center' }}>
          <Spin size="large" />
        </div>
      ) : (<>
        <Box sx={{ display: 'flex' }} >
          <CssBaseline />
          <AppBar open={open} style={{ backgroundColor: "#222831" }} > {/*This component renders a custom AppBar with a dark background color and various components including a logo, menu icon, notification icon, and user avatar.*/}
            <Toolbar >
              {/*This IconButton toggles the visibility of a Drawer component when clicked.*/}
              <IconButton 
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                sx={{
                  marginRight: 2,
                  ...(open && { display: 'none' }),
                }}
              >
                <MenuIcon />
              </IconButton>
              <Navbar.Brand href="/" ><img className='logo' src={Logo} alt='' ></img></Navbar.Brand> {/* This Navbar.Brand component is a link to the home page and includes a logo. */}
              <div className="d-flex justify-content-end col"> {/*This div contains various components that are aligned to the right side of the AppBar. */}
                {((jwt(localStorage.getItem('token'))).roles == 'USER') ? (<>
                  <div className='mx-1 row'><NotificationItem manager={managerRequests} resource={resourceRequests} setVal={setValue} fetchData={fetchData} /></div>
                </>) : (<></>)}
                <AvatarItem initials={name[0]} />
                <div className='mt-2 mx-2' sx={{ fontSize: 'large' }} style={{ color: '#EEEEEE' }}>Hi {name.split(' ')[0]}</div>
              </div>
            </Toolbar>
          </AppBar>
          <Drawer variant="permanent" open={open}>
            <DrawerHeader>
              <IconButton onClick={handleDrawerClose}>
                {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
              </IconButton>
            </DrawerHeader>
            <Divider />
            <List>
            <ListItem key='Home' className={`${(tabValue == '1') ? 'highlightTab text-primary' : ''}`} disablePadding sx={{ display: 'block' }} onClick={() => handleDrawerLinks("1")}>
                  <ListItemButton sx={{ minHeight: 48, justifyContent: open ? 'initial' : 'center', px: 1.5 }}>
                    <ListItemIcon sx={{ minWidth: 0, mr: open ? 2 : 'auto', justifyContent: 'center' }}>
                      <HomeFilled className={`${(tabValue == '1') ? 'text-primary' : ''}`} />
                    </ListItemIcon>
                   <ListItemText primary='Dashboard' sx={{ opacity: open ? 1 : 0 }} />
                  </ListItemButton>
                </ListItem>
                
                <ListItem className={`${(tabValue == '2') ? 'highlightTab text-primary' : ''}`} disablePadding sx={{ display: 'block' }} onClick={() => handleDrawerLinks("2")}>
                  <ListItemButton sx={{ minHeight: 48, justifyContent: open ? 'initial' : 'center', px: 1.5 }}>
                    <ListItemIcon sx={{ minWidth: 0, mr: open ? 2 : 'auto', justifyContent: 'center' }}>
                      <AccountBookOutlined  className={`${(tabValue == '2') ? 'text-primary' : ''}`} />
                    </ListItemIcon>
                    <ListItemText primary='Profile' sx={{ opacity: open ? 1 : 0 }} />
                  </ListItemButton>
                </ListItem>
                <ListItem className={`${(tabValue == '3') ? 'highlightTab text-primary' : ''}`} disablePadding sx={{ display: 'block' }} onClick={() => handleDrawerLinks("3")}>
                  <ListItemButton sx={{ minHeight: 48, justifyContent: open ? 'initial' : 'center', px: 1.5 }}>
                    <ListItemIcon sx={{ minWidth: 0, mr: open ? 2 : 'auto', justifyContent: 'center' }}>
                      <InsuranceOutlined className={`${(tabValue == '3') ? 'text-primary' : ''}`} />
                    </ListItemIcon>
                    <ListItemText primary='InsurancePlans' sx={{ opacity: open ? 1 : 0 }} />
                  </ListItemButton>
                </ListItem>
                <ListItem className={`${(tabValue == '4') ? 'highlightTab text-primary' : ''}`} disablePadding sx={{ display: 'block' }} >
                  <ListItemButton sx={{ minHeight: 48, justifyContent: open ? 'initial' : 'center', px: 1.5 }}>
                    <ListItemIcon sx={{ minWidth: 0, mr: open ? 2 : 'auto', justifyContent: 'center' }}>
                      <UsergroupAddOutlined className={`${(tabValue == '4') ? 'text-primary' : ''}`} />
                    </ListItemIcon>
                    <ListItemText primary='Marketing' sx={{ opacity: open ? 1 : 0 }} />
                  </ListItemButton>
                </ListItem>
                <ListItem className={`${(tabValue == '5') ? 'highlightTab text-primary' : ''}`} disablePadding sx={{ display: 'block' }} onClick={() => handleDrawerLinks("5")}>
                  <ListItemButton sx={{ minHeight: 48, justifyContent: open ? 'initial' : 'center', px: 1.5 }}>
                    <ListItemIcon sx={{ minWidth: 0, mr: open ? 2 : 'auto', justifyContent: 'center' }}>
                      <SettingOutlined className={`${(tabValue == '5') ? 'text-primary' : ''}`} />
                    </ListItemIcon>
                    <ListItemText primary='Queries' sx={{ opacity: open ? 1 : 0 }} />
                  </ListItemButton>
                </ListItem>
            </List>
          </Drawer>
          <TabContext value={tabValue}>
          <TabPanel value="1">
              <Box sx={{ flexGrow: 1 }}>
                <DrawerHeader />                
                <h1>1st tab</h1>  
              </Box>
            </TabPanel>
            <TabPanel value="2">
              <DrawerHeader />
              <Profile/>
            </TabPanel>
            <TabPanel value="3">
              <DrawerHeader />
              <InsurancePlan/>
            </TabPanel>
            <TabPanel value="4">
              <DrawerHeader />
              <h1>4th tab</h1>
            </TabPanel>
            
            <TabPanel value="5">
              <DrawerHeader />
              <CustQueries/>
            </TabPanel>
          </TabContext>
        </Box>

        {((jwt(localStorage.getItem('token'))).roles == 'USER') ? (
          <div class="fixed-bottom w-100 bg-dark footerDiv" sx={{ width: '100%' }}>
            <div className='text-center text-light text-small'>
              <small>© 2023 Incedo</small>
            </div>
          </div>) : ('')}
      </>)}</div>
  );
}
