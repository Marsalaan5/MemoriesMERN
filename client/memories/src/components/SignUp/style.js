import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth: '400px',
    margin: '0 auto',
    padding: theme.spacing(2),
    backgroundColor: '#f4f4f4',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  },
  input: {
    marginBottom: theme.spacing(2),
    padding: theme.spacing(1),
    width: '100%',
    borderRadius: '4px',
    border: '1px solid #ddd',
    fontSize: '16px',
  },
//   button: {
//     padding: theme.spacing(1),
//     backgroundColor: '#1976d2',
//     color: '#fff',
//     border: 'none',
//     cursor: 'pointer',
//     borderRadius: '4px',
//     '&:hover': {
//       backgroundColor: '#1565c0',
//     },
//   },
// buttonContainer: {
//     display: 'flex',
//     justifyContent: 'space-between', 
//     width: '100%',
//     gap: theme.spacing(2),
//   },
  
  button: {
    padding: theme.spacing(1),
    margin:'4px',
    backgroundColor: '#1976d2',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '4px',
    '&:hover': {
      backgroundColor: '#1565c0',
    },
    forgotbutton:{
        color:'#fff',
    }
  },
  error: {
    color: 'red',
    fontSize: '14px',
    marginBottom: theme.spacing(2),
  },
}));

export default useStyles;
