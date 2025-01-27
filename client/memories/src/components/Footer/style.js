import { makeStyles } from '@mui/styles';


const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: 'skyblue',
    padding: '3rem 0',
    marginTop: '1rem',
  },
  socialLinks: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  socialButton: {
    color: 'red',
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
    },
  },
}));

export default useStyles;
