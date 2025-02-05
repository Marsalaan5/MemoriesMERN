import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme)=>({
  media: {
    height: 0,
    paddingTop: '66.25%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    backgroundBlendMode: 'darken',
  },
  border: {
    border: 'solid',
  },
  fullHeightCard: {
    height: '100%',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '15px',
    height: '100%',
    // margin:'0px 0px',
    position: 'relative',
  },
  overlay: {
    position: 'absolute',
    top: '20px',
    left: '20px',
    color: 'white',
  },
  overlay2: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    color: 'white',
  },
  grid: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px', 
  },
  details: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '20px',
  },
  title: {
    padding: '0 16px',
  },
  cardActions: {
    padding: '0 16px 8px 16px',
    display: 'flex',
    justifyContent: 'space-between',
  },
  mainContainer: {
    display: 'flex',
    alignItems: 'center',
      // margin:"100px 0px",
    // marginTop:'110px',
  },
  // container:{
  //   margin:"100px 0px",
  // },
  smMargin: {
    margin: theme.spacing(1),
  },
  actionDiv: {
    textAlign: 'center',
  },
  extContainer:{
    marginTop:'100px'
  }
}));
