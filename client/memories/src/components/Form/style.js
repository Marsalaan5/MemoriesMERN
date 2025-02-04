import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root':{
        margin:theme.spacing(1),
        // margin:'140px 0',
    },
},
paper:{
    padding:theme.spacing(2),
    // margin:"100px 0"
  },
  form:{
    display:'flex',
    flexWrap:'wrap',
    justifyContent:'center',
    // margin:'140px 0',
},
fileInput: {
    width: '97%',
    margin: '10px 0',
  },
  
 
  buttonSubmit: {
  
    marginBottom: 10,
  },
}));

export default useStyles;
