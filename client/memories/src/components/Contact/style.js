import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  contactform: {
    display: 'flex',
     justifyContent:'center',
     alignItems:'center',
    height: '70vh',         
    marginTop: '100px',       
    padding: theme.spacing(3),
    backgroundColor: '#f4f4f9',
    borderRadius: 8,
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  title: {
    display:'flex',
    fontWeight: 600,
    textAlign: 'center',
    marginBottom: theme.spacing(4),
    color: '#333',
    justifyContent: 'center',  
    alignItems: 'center',  
  },
  form: {
    flexDirection: 'column',
    gap: theme.spacing(2),
  },
  inputField: {
    '& .MuiInputBase-root': {
      marginBottom: theme.spacing(2),
    },
  },
  submitButton: {
    marginTop: theme.spacing(2),
    padding: theme.spacing(1.5),
    backgroundColor: '#3f51b5',
    '&:hover': {
      backgroundColor: '#303f9f',
    },
  },
  statusMessage: {
    marginTop: theme.spacing(2),
    textAlign: 'center',
  },
  errorMessage: {
    color: '#f44336',  // Red color for error
  },
  successMessage: {
    color: '#4caf50',  // Green color for success
  },
}));

export default useStyles;
