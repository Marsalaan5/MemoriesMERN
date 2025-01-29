
import {  Typography, Grid, Button } from '@mui/material';

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import useStyles from './style';

function Footer() {
    const classes = useStyles();
  return (
    <footer className={classes.footer}>
       
<Grid container spacing={3} justifyContent='space-between' alignItems='center'>
<Grid item xs={12} sm={6}> 
<Typography variant='body1' color='textSecondary'>
&copy; {new Date().getFullYear()}
MemoriesApp.All Rights Reserved.
</Typography>
</Grid>
          <Grid item xs={12} sm={6} className={classes.socialLinks}>
            <Typography variant="body1" color="textSecondary">
              Connect with us:
            </Typography>
            <Button
              component="a"
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className={classes.socialButton}
            >
              <GitHubIcon />
            </Button>
            <Button
              component="a"
              href="https://www.linkedin.com/in/"
              target="_blank"
              rel="noopener noreferrer"
              className={classes.socialButton}
            >
              <LinkedInIcon />
            </Button>
            <Button
              component="a"
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className={classes.socialButton}
            >
              <InstagramIcon />
            </Button>
          </Grid>
        </Grid>

    </footer>
  )
}
export default Footer;

