

import { AppBar, Toolbar, IconButton, Drawer, List, ListItem, ListItemText, useMediaQuery, useTheme, Typography, Button, Container } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import useStyles from './style';
import { useState } from 'react';


function Navbar() {
  const classes = useStyles();
  const navigate = useNavigate(); 
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); 

  const [open, setOpen] = useState(false); 

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  const menuItems = ['Home', 'Posts', 'Create Post', 'About','Login']; 

  return (
    <>
      <AppBar sx={{ backgroundColor: '#ADD8E6' }} position="fixed" className={classes.appBar}>
        <Container maxWidth="lg">
          <Toolbar className={classes.toolbar}>
            {/* Title of the app */}
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
              // Normal navigation links for larger screens
              <div className={classes.navLinks}>
                {menuItems.map((item, index) => (
                  <Button
                    key={index}
                    color="inherit"
                    className={classes.navButton}
                    onClick={() => navigate(`/${item.toLowerCase().replace(" ", "")}`)} // Navigate based on the item
                  >
                    {item}
                  </Button>
                ))}
              </div>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      {/* Drawer for mobile screens */}
      <Drawer anchor="right" open={open} onClose={handleDrawerToggle}>
        <List className={classes.drawerList}>
          {menuItems.map((item, index) => (
            <ListItem 
              button
              key={index} 
              onClick={() => {
                navigate(`/${item.toLowerCase().replace(" ", "")}`); 
                handleDrawerToggle(); 
              }}
            >
              <ListItemText primary={item} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}

export default Navbar;
