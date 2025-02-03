
///////////////////////////////////////////////////////////////////////////////////////////////
// import { AppBar, Toolbar, IconButton, Drawer, List, ListItem, ListItemText, useMediaQuery, useTheme, Typography, Button, Container } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
// import { useNavigate } from 'react-router-dom';
// import useStyles from './style';
// import { useState } from 'react';
// import { useSelector,useDispatch } from 'react-redux';
// import { Link } from 'react-router-dom';

// function Navbar() {
//   const classes = useStyles();
//   const navigate = useNavigate(); 
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('sm')); 

//   const [open, setOpen] = useState(false); 

//   const handleDrawerToggle = () => {
//     setOpen(!open);
//   };

//   const user = useSelector((state)=> state.auth.user);
//   const menuItems = ['Home', 'Posts', 'Create Post', 'About']; 

//   return (
//     <>
//       <AppBar sx={{ backgroundColor: '#ADD8E6' }} position="fixed" className={classes.appBar}>
//         <Container maxWidth="lg">
//           <Toolbar className={classes.toolbar}>
//             {/* Title of the app */}
//             <Typography variant="h4" className={classes.title} fontWeight={600}>
//               Memories App
//             </Typography>

//             {isMobile ? (
//               <IconButton
//                 edge="end"
//                 color="inherit"
//                 aria-label="menu"
//                 onClick={handleDrawerToggle}
//                 className={classes.menuButton}
//               >
//                 <MenuIcon />
//               </IconButton>
//             ) : (
//               // Normal navigation links for larger screens
//               <div className={classes.navLinks}>
//                 {menuItems.map((item, index) => (
//                   <Button
//                     key={index}
//                     color="inherit"
//                     className={classes.navButton}
//                     onClick={() => navigate(`/${item.toLowerCase().replace(" ", "")}`)} // Navigate based on the item
//                   >
//                     {item}
//                   </Button>
//                 ))}
//                  {user ? (
//                   <Typography variant="body1" className={classes.userInfo}>
//                     Welcome, {user.name}
//                   </Typography>
//                 ) : (
//                   <Button
//                     color="inherit"
//                     onClick={() => navigate('/login')}
//                     className={classes.navButton}
//                   >
//                     Login
//                   </Button>
//                 )}

//               </div>
//             )}
//           </Toolbar>
//         </Container>
//       </AppBar>

//       {/* Drawer for mobile screens */}
//       <Drawer anchor="right" open={open} onClose={handleDrawerToggle}>
//         <List className={classes.drawerList}>
//           {menuItems.map((item, index) => (
//             <ListItem 
//               button
//               key={index} 
//               onClick={() => {
//                 navigate(`/${item.toLowerCase().replace(" ", "")}`); 
//                 handleDrawerToggle(); 
//               }}
//             >
//               <ListItemText primary={item} />
//             </ListItem>
//           ))}
//             {user ? (
//             <ListItem button onClick={() => navigate('/profile')}>
//               <ListItemText primary={`Welcome, ${user.name}`} />
//             </ListItem>
//           ) : (
//             <ListItem button onClick={() => navigate('/login')}>
//               <ListItemText primary="Login" />
//             </ListItem>
//           )}

//         </List>
//       </Drawer>
//     </>
//   );
// }

// export default Navbar;

/////////////////////////////////////////////////////////////////////////////////

// import { AppBar, Toolbar, IconButton, Drawer, List, ListItem, ListItemText, useMediaQuery, useTheme, Typography, Button, Container } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
// import { useNavigate } from 'react-router-dom';
// import useStyles from './style';
// import { useState } from 'react';

// function Navbar() {
//   const classes = useStyles();
//   const navigate = useNavigate(); 
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('sm')); 

//   const [open, setOpen] = useState(false); 

//   const menuItems = ['Home', 'Posts', 'Create Post', 'About'];

//   const handleDrawerToggle = () => {
//     setOpen(!open);
//   };

//   return (
//     <>
//       <AppBar sx={{ backgroundColor: '#ADD8E6' }} position="fixed" className={classes.appBar}>
//         <Container maxWidth="lg">
//           <Toolbar className={classes.toolbar}>
//             {/* Title of the app */}
//             <Typography variant="h4" className={classes.title} fontWeight={600}>
//               Memories App
//             </Typography>

//             {isMobile ? (
//               <IconButton
//                 edge="end"
//                 color="inherit"
//                 aria-label="menu"
//                 onClick={handleDrawerToggle}
//                 className={classes.menuButton}
//               >
//                 <MenuIcon />
//               </IconButton>
//             ) : (
//               // Normal navigation links for larger screens
//               <div className={classes.navLinks}>
//                 {menuItems.map((item, index) => (
//                   <Button
//                     key={index}
//                     color="inherit"
//                     className={classes.navButton}
//                     onClick={() => navigate(`/${item.toLowerCase().replace(" ", "")}`)} // Navigate based on the item
//                   >
//                     {item}
//                   </Button>
//                 ))}
//               </div>
//             )}
//           </Toolbar>
//         </Container>
//       </AppBar>

//       {/* Drawer for mobile screens */}
//       <Drawer anchor="right" open={open} onClose={handleDrawerToggle}>
//         <List className={classes.drawerList}>
//           {menuItems.map((item, index) => (
//             <ListItem 
//               button
//               key={index} 
//               onClick={() => {
//                 navigate(`/${item.toLowerCase().replace(" ", "")}`); 
//                 handleDrawerToggle(); 
//               }}
//             >
//               <ListItemText primary={item} />
//             </ListItem>
//           ))}
//         </List>
//       </Drawer>
//     </>
//   );
// }

// export default Navbar;

// import { AppBar, Toolbar, IconButton, Drawer, List, ListItem, ListItemText, useMediaQuery, useTheme, Typography, Button, Container } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
// import { useNavigate } from 'react-router-dom';
// import useStyles from './style';
// import { useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { logout } from '../../actions/actions';
// import { Navigate } from 'react-router-dom';

// function Navbar() {
//   const classes = useStyles();
//   const navigate = useNavigate();
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
//   const [open, setOpen] = useState(false);

//   // Fetch authentication state and user from Redux
//   const { user, isAuthenticated } = useSelector((state) => state.auth || null); 
//   const dispatch = useDispatch();

//   const menuItems = ['Home', 'Posts', 'Create Post', 'About','Contact Us'];

//   // Redirect to login if not authenticated
//   if (!isAuthenticated) {
//     return <Navigate to="/login" />;
//   }

//   const handleDrawerToggle = () => {
//     setOpen(!open);
//   };

//   const handleMenuItemClick = (path) => {
//     navigate(path);
//     setTimeout(() => {
//       handleDrawerToggle();
//     }, 10);
//   };

//   const handleLogout = () => {
//     localStorage.removeItem('token'); 
//     dispatch(logout()); 
//   };

//   const renderMenuItems = () => {
//     return menuItems.map((item, index) => (
//       <Button
//         key={index}
//         color="inherit"
//         className={classes.navButton}
//         onClick={() => handleMenuItemClick(`/${item.toLowerCase().replace(" ", "")}`)}
//       >
//         {item}
//       </Button>
//     ));
//   };

//   const renderUserInfo = () => {
//     if(isAuthenticated && user)
//     return isAuthenticated ? (
//       <>
//         <Typography variant="body1" className={classes.userInfo}>
//          {user.name}
//         </Typography>
//         <Button
//           color="inherit"
//           onClick={handleLogout}
//           className={classes.navButton}
//         >
//           Logout
//         </Button>
//       </>
//     ) : (
//       <Button
//         color="inherit"
//         onClick={() => navigate('/login')}
//         className={classes.navButton}
//       >
//         Login
//       </Button>
//     );
//   };

//   return (
//     <>
//       <AppBar sx={{ backgroundColor: '#ADD8E6' }} position="fixed" className={classes.appBar}>
//         <Container maxWidth="lg">
//           <Toolbar className={classes.toolbar}>
//             <Typography variant="h4" className={classes.title} fontWeight={600}>
//               Memories App
//             </Typography>

//             {isMobile ? (
//               <IconButton
//                 edge="end"
//                 color="inherit"
//                 aria-label="menu"
//                 onClick={handleDrawerToggle}
//                 className={classes.menuButton}
//               >
//                 <MenuIcon />
//               </IconButton>
//             ) : (
//               <div className={classes.navLinks}>
//                 {renderMenuItems()}
//                 {renderUserInfo()}
//               </div>
//             )}
//           </Toolbar>
//         </Container>
//       </AppBar>

//       <Drawer anchor="right" open={open} onClose={handleDrawerToggle}>
//         <List className={classes.drawerList}>
//           {menuItems.map((item, index) => (
//             <ListItem button key={index} onClick={() => handleMenuItemClick(`/${item.toLowerCase().replace(" ", "")}`)}>
//               <ListItemText primary={item} />
//             </ListItem>
//           ))}
//           {/* {isAuthenticated ? (
//             <>
//               <ListItem button onClick={handleLogout}>
//                 <ListItemText primary="Logout" />
//               </ListItem>
//             </>
//           ) : (
//             <ListItem button onClick={() => navigate('/login')}>
//               <ListItemText primary={user.name} />
//               <ListItemText primary="Login" />
//             </ListItem>
//           )} */}
//         </List>
//       </Drawer>
//     </>
//   );
// }

// export default Navbar;



import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
  Typography,
  Button,
  Container,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import useStyles from './style';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../actions/actions';
// import { Navigate } from 'react-router-dom';

function Navbar() {
  const classes = useStyles();
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [open, setOpen] = useState(false);

  // Fetch authentication state and user from Redux
  const { user, isAuthenticated } = useSelector((state) => state.auth || null);
  const dispatch = useDispatch();

  const menuItems = ['Home', 'Posts', 'Create Post', 'About', 'Contact Us'];

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  const handleMenuItemClick = (path) => {
    navigate(path);
    setTimeout(() => {
      handleDrawerToggle();
    }, 10);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    dispatch(logout());
    navigate('/login'); // Redirect to login after logout
  };

  const renderMenuItems = () => {
    return menuItems.map((item, index) => (
      <Button
        key={index}
        color="inherit"
        className={classes.navButton}
        onClick={() => handleMenuItemClick(`/${item.toLowerCase().replace(' ', '')}`)}
      >
        {item}
      </Button>
    ));
  };

  const renderUserInfo = () => {
    if (isAuthenticated && user) {
      return (
        <>
          <Typography variant="body1" className={classes.userInfo}>
            Welcome, {user.name}
          </Typography>
          <Button
            color="inherit"
            onClick={handleLogout}
            className={classes.navButton}
          >
            Logout
          </Button>
        </>
      );
    } else {
      return (
        <Button
          color="inherit"
          onClick={() => navigate('/login')}
          className={classes.navButton}
        >
          Login
        </Button>
      );
    }
  };

useEffect(() => {
  if(!isAuthenticated){
    navigate('/login')
  }
  },[isAuthenticated,navigate])


  return (
    <>
      <AppBar sx={{ backgroundColor: '#ADD8E6' }} position="fixed" className={classes.appBar}>
        <Container maxWidth="lg">
          <Toolbar className={classes.toolbar}>
            <Typography variant="h4" className={classes.title} fontWeight={600}>
              Memories App
            </Typography>

            {isMobile ? (
              <IconButton
                edge="end"
                color="inherit"
                aria-label="menu"
                onClick={handleDrawerToggle}
                className={classes.menuButton}
              >
                <MenuIcon />
              </IconButton>
            ) : (
              <div className={classes.navLinks}>
                {renderMenuItems()}
                {renderUserInfo()}
              </div>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer anchor="right" open={open} onClose={handleDrawerToggle}>
        <List className={classes.drawerList}>
          {menuItems.map((item, index) => (
            <ListItem button key={index} onClick={() => handleMenuItemClick(`/${item.toLowerCase().replace(' ', '')}`)}>
              <ListItemText primary={item} />
            </ListItem>
          ))}
          {isAuthenticated ? (
            <>
              <ListItem button onClick={handleLogout}>
                <ListItemText primary="Logout" />
              </ListItem>
            </>
          ) : (
            <ListItem button onClick={() => navigate('/login')}>
              <ListItemText primary="Login" />
            </ListItem>
          )}
        </List>
      </Drawer>
    </>
  );
}

export default Navbar;
