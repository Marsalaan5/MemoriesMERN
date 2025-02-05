import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root':{
        margin:theme.spacing(),

        // margin:'140px 0',
    },
},
paper:{
    padding:theme.spacing(2),

    // margin:theme.spacing(1)
    margin:"100px 0",

  },
  form:{
    display:'flex',
    flexWrap:'wrap',
    justifyContent:'center',
    // maxWidth:'100%'
    // margin:'140px 0',
},
fileInput: {
    width: '97%',
    margin: '20px 0',
  },
  button:{
margin:'10px',
  },
  
 
  buttonSubmit: {
  
    marginBottom: 10,
  },
}));

export default useStyles;
