

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: theme.palette.background.default,
      marginTop:'80px',
      minHeight: '90vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: theme.spacing(4),
    },
    paper: {
      padding: theme.spacing(4),
      width: '100%',
      maxWidth: '600px',
      textAlign: 'center',
      borderRadius: '8px',
      boxShadow: theme.shadows[3],
    },
    welcomeText: {
      fontWeight: 600,
      marginBottom: theme.spacing(3),
      fontSize: '2rem',
    },
    logoutButton: {
      marginTop: theme.spacing(2),
      backgroundColor: theme.palette.error.main,
      color: 'white',
      '&:hover': {
        backgroundColor: theme.palette.error.dark,
      },
    },
  }));


  export default useStyles;