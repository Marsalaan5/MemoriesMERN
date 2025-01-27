

import { AppBar, Toolbar, Typography, Button, Container, Grid } from '@mui/material';
// import { Link } from 'react-router-dom';
import useStyles from './style';

function Navbar() {
    const classes = useStyles();

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Container maxWidth="lg">
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" className={classes.title}>
            Memories App
          </Typography>

          <Grid container justifyContent="flex-end" spacing={2}>
            <Grid item>
              <Button  to="/" className={classes.navButton}>
                Home
              </Button>
            </Grid>
            <Grid item>
              <Button to="/create" className={classes.navButton}>
                Create Post
              </Button>
            </Grid>
            <Grid item>
              <Button  to="/about" className={classes.navButton}>
                About
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );
};


export default Navbar;