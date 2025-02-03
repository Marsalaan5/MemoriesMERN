import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '300px',
    margin: '0 auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
  },
  input: {
    width: '100%',
    padding: '10px',
    margin: '10px 0',
    border: '1px solid #ccc',
    borderRadius: '4px',
    fontSize: '16px',
    outline: 'none',
    '&:focus': {
      borderColor: '#3f51b5',
    },
  },
  button: {
    width: '100%',
    margin:'5px',
    padding: '12px',
    backgroundColor: '#3f51b5',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    fontSize: '16px',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: '#303f9f',
    },
  },
  error: {
    color: '#f44336',
    marginBottom: '10px',
    fontSize: '14px',
    textAlign: 'center',
  },
  success: {
    color: '#4caf50',
    marginBottom: '10px',
    fontSize: '14px',
    textAlign: 'center',
  },
  h4: {
    marginTop: '15px',
    textAlign: 'center',
    fontSize: '14px',
    color: '#555',
  },
}));

export default useStyles;
