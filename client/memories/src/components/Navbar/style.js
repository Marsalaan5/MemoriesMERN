import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  appBar: {
   
    zIndex: theme.zIndex.drawer + 1, 
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-end',
    alignItems: 'center',
  },
  title: {
    flexGrow: 1,
    fontWeight: 700,
  },
  menuButton: {
    color: 'white',
    // fontWeight:'600'
  },
  navLinks: {
    display: 'flex',
    gap: '1rem',
    
  },
  navButton: {
    fontWeight: 'bold',
    // fontWeight:'600'
  },
  drawerList: {
    width: 250,
    padding: '10px',
  },
}));

export default useStyles;
