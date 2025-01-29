

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  appBar: {
    borderRadius: 15,
    padding:'10px', 
    margin: '50px 0',
    display: 'flex',
    // flexDirection: 'row',
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor:"red",
  },
  heading: {
    color: 'rgba(0,183,255,1)',
    // padding:'10px',
    // marginBottom:'50px',
  },
  image: {
    // marginTop:'15px',
    marginLeft: '15px',
    padding:'2px'

  },
}));

export default useStyles;
