import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  about: {
    // margin: theme.spacing(5),
    padding: theme.spacing(4),
    margin:'100px 0px',
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  heading: {
    fontWeight: 600,
    color: '#333',
    textAlign: 'center',
    marginBottom: theme.spacing(3),
  },
  subHeading: {
    textAlign: 'center',
    fontWeight: 500,
    color: '#555',
    marginBottom: theme.spacing(2),
  },
  paragraph: {
    color: '#666',
    lineHeight: 1.6,
    marginBottom: theme.spacing(2),
  },
  ul: {
    listStyleType: 'none',
    paddingLeft: theme.spacing(4),
  },
  li: {
    color: '#555',
    marginBottom: theme.spacing(1),
    fontSize: '1rem',
    lineHeight: 1.6,
  },
}));
