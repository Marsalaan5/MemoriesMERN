import "./App.css";
import { Container, AppBar, Typography, Grow, Grid } from '@mui/material'; 
import { useDispatch } from "react-redux";

import {getPosts} from './actions/actions.js'
import memories from './components/images/memories.png';
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import useStyles from './style';
import { useEffect, useState } from "react";
import Footer from "./components/Footer/Footer.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";

function App() {
  const [currentId, setCurrentId] = useState(0)
  const dispatch = useDispatch();
  const classes = useStyles();

useEffect(()=>{
  dispatch(getPosts());
},[dispatch]);

  return (
    <>
    <Navbar/>
      <Container maxWidth={false}>
        <AppBar className={classes.appBar} position="static" color="inherit">
          <Typography className={classes.heading} variant="h3" align="center">
            Welcome to Memories App
          </Typography>
          <img className={classes.image} src={memories} alt="memories" height="100" />
        </AppBar>
        <Grow in>
          <Container>
            <Grid
              container
              justify="space-between"
              alignItems="stretch"
              spacing={3}
            >
              <Grid item xs={12} sm={8}>
                <Posts setCurrentId={setCurrentId}/>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Form currentId={currentId} setCurrentId={setCurrentId} />
              </Grid>
            </Grid>
          </Container>
        </Grow>
      </Container>

      <Footer className={classes.footer}/>
    </>
  );
}

export default App;


// import "./App.css";
// import { Container, AppBar, Typography, Grow, Grid } from '@mui/material'; 
// import { useDispatch } from "react-redux";

// import { getPosts } from './actions/actions.js';
// import memories from './components/images/memories.png';
// import Posts from "./components/Posts/Posts";
// import Form from "./components/Form/Form";
// import useStyles from './style';
// import { useEffect,useState } from "react";

// function App() {
//   const [currentId, setCurrentId] = useState(null)
//   const classes = useStyles();
//   const dispatch = useDispatch();


//   useEffect(() => {
//     dispatch(getPosts());
//   }, [currentId ,dispatch]);

//   return (
//     <Container maxWidth="lg">
//       <AppBar className={classes.appBar} position="static" color="inherit">
//         <Typography className={classes.heading} variant="h3" align="center">
//           Memories
//         </Typography>
//         <img className={classes.image} src={memories} alt="memories" height={200}/>
//       </AppBar>
//       <Grow in>
//         <Container>
//           <Grid
//             container
//             justifyContent="space-between"
//             alignItems="stretch"
//             spacing={3}
//           >
//             <Grid item xs={12} sm={7}>
//               <Posts setCurrentId={setCurrentId}/>
//             </Grid>
//             <Grid item xs={12} sm={4}>
//               <Form currentId={currentId} setCurrentId={setCurrentId}/>
//             </Grid>
//           </Grid>
//         </Container>
//       </Grow>
//     </Container>
//   );
// }

// export default App;
