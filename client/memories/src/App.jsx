// // import "./App.css";
// // import { Container, AppBar, Typography, Grow, Grid, Box } from '@mui/material';
// // import { useDispatch } from "react-redux";
// // import { Route, Routes, useLocation } from 'react-router-dom';
// // import { Carousel } from 'react-responsive-carousel';
// // import 'react-responsive-carousel/lib/styles/carousel.min.css';

// // import { getPosts } from './actions/actions.js';
// // import memories from './components/images/memories.png';
// // import Posts from "./components/Posts/Posts.jsx";
// // import Form from "./components/Form/Form.jsx";
// // import useStyles from './style';
// // import { useEffect, useState } from "react";
// // import Footer from "./components/Footer/Footer.jsx";
// // import Navbar from "./components/Navbar/Navbar.jsx";
// // import About from "./components/About/About.jsx";
// // import Login from "./components/Login/Login.jsx";
// // import Signup from "./components/SignUp/Signup.jsx";
// // import ForgotPassword from "./components/ForgotPassword/ForgotPassword.jsx";

// // function App() {
// //   const [currentId, setCurrentId] = useState(0);
// //   const dispatch = useDispatch();
// //   const classes = useStyles();
// //   const location = useLocation();

// //   useEffect(() => {
// //     dispatch(getPosts());
// //   }, [dispatch]);

// //   const getHeadingText = () => {
// //     if (location.pathname === "/about") {
// //       return " About";
// //     } else if (location.pathname === "/posts") {
// //       return "All Posts";
// //     } else if (location.pathname === "/login") {
// //       return "Login to your Account";
// //     } else if (location.pathname === "/signup") {
// //       return "Create your Account";
// //     } else {
// //       return "Welcome to Memories App";
// //     }
// //   };

// //   return (
// //     <div>
// //       <Navbar />

// //       <AppBar sx={{ backgroundColor: '#ADD8E7' }} className={classes.appBar} position="static">
// //         <Typography className={classes.heading} variant="h4" align="center" fontWeight={600}>
// //           {getHeadingText()}
// //           <img className={classes.image} src={memories} alt="memories" height="50" />
// //         </Typography>
// //       </AppBar>

// //       <Routes>
// //         <Route path="/home" element={(
// //           <Grow in>
// //             <Container>
// //               {/* Carousel Section */}
// //               <Box sx={{ width: '60%', margin: 'auto' }}>
// //                 <Carousel>
// //                   <div>
// //                     <img src="https://images.unsplash.com/photo-1472653431158-6364773b2a56?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="carousel-1" />
// //                     <p className="legend">Family Reunion</p>
// //                   </div>
// //                   <div>
// //                     <img src="https://images.unsplash.com/file-1715651741414-859baba4300dimage?w=416&dpr=2&auto=format&fit=crop&q=60" alt="carousel-2" />
// //                     <p className="legend">Summer Vacation</p>
// //                   </div>
// //                   <div>
// //                     <img src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=1624&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="carousel-3" />
// //                     <p className="legend">Adventure Time</p>
// //                   </div>
// //                 </Carousel>
// //               </Box>
// //             </Container>
// //           </Grow>
// //         )} />

// //         <Route path="/posts" element={<Posts />} />
// //         <Route path="/login" element={<Login />} />
// //         <Route path="/signup" element={<Signup />} />
// //         <Route path="/signup" component={<Signup />} />
// //         <Route path="/forgot-password" element={ForgotPassword} />
// //         <Route path="/createpost" element={( <Grow in>
// //             <Container>

// //               {/* Posts and Form Section */}
// //               <Container>
// //                 <Grid container justify="space-between" alignItems="stretch" spacing={3}>
// //                   <Grid item xs={12} sm={8}>
// //                     <Posts setCurrentId={setCurrentId} />
// //                   </Grid>
// //                   <Grid item xs={12} sm={4}>
// //                     <Form currentId={currentId} setCurrentId={setCurrentId} />
// //                   </Grid>
// //                 </Grid>
// //               </Container>
// //             </Container>
// //           </Grow>
// //         )} />

// //         <Route path="/about" element={<About />} />

// //       </Routes>

// //       <Footer className={classes.footer} />
// //     </div>
// //   );
// // }

// // export default App;

// import "./App.css";
// import { Container, AppBar, Typography, Grow, Grid, Box } from "@mui/material";
// import { useDispatch} from "react-redux";
// import { Route, Routes, useLocation, Navigate } from "react-router-dom";
// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";

// import { getPosts,login } from "./actions/actions.js";
// // import memories from "./components/images/memories.png";
// import Posts from "./components/Posts/Posts.jsx";
// import Form from "./components/Form/Form.jsx";
// import useStyles from "./style";
// import { useEffect, useState } from "react";
// import Footer from "./components/Footer/Footer.jsx";
// import Navbar from "./components/Navbar/Navbar.jsx";
// import About from "./components/About/About.jsx";
// import Login from "./components/Login/Login.jsx";
// import Signup from "./components/SignUp/Signup.jsx";
// import ForgotPassword from "./components/ForgotPassword/ForgotPassword.jsx";
// import Dashboard from './components/Dashboard/Dashboard.jsx';

// function App() {
//   const [currentId, setCurrentId] = useState(0);
//   const dispatch = useDispatch();
//   const classes = useStyles();
//   const location = useLocation();



//   // Fetch posts when the app loads
//   useEffect(() => {
//     dispatch(getPosts());
//   }, [dispatch]);

//   // Check if the user has a token stored in localStorage
//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     if (token) {
//       // Dispatch the login action with token
//       dispatch(login({ token }));
//     }
//   }, [dispatch]);

//   const getHeadingText = () => {
//     if (location.pathname === "/about") {
//       return " About";
//     } else if (location.pathname === "/posts") {
//       return "All Posts";
//     } else if (location.pathname === "/login") {
//       return "Login to your Account";
//     } else if (location.pathname === "/signup") {
//       return "Create your Account";
//     } else if (location.pathname === "/dashboard") {
//       return '';
//     } else {
//       return "Welcome to Memories App";
//     }
//   };

//   return (
//     <div>
//       <AppBar
//         sx={{ backgroundColor: "#ADD8E7" }}
//         className={classes.appBar}
//         position="static"
//       >
//         <Typography
//           className={classes.heading}
//           variant="h4"
//           align="center"
//           fontWeight={600}
//         >
//           {getHeadingText()}
//           {/* <img
//             className={classes.image}
//             src={memories}
//             alt="memories"
//             height="50"
//           /> */}
//         </Typography>
//       </AppBar>

//       <Navbar />
//       <Routes>
//         <Route
//           path="/*"
//           element={
//             <Grow in>
//               <Container>
//                 {/* Carousel Section */}
//                 <Box sx={{ width: "60%", margin: "auto" }}>
//                   <Carousel>
//                     {/* Add your carousel images */}
//                     <div>
//                       <img
//                         src="https://images.unsplash.com/photo-1472653431158-6364773b2a56?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//                         alt="carousel-1"
//                       />
//                       <p className="legend">Family Reunion</p>
//                     </div>
//                     <div>
//                       <img
//                         src="https://images.unsplash.com/photo-1472653431158-6364773b2a56?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//                         alt="carousel-1"
//                       />
//                       <p className="legend">Family Reunion</p>
//                     </div>
//                     <div>
//                       <img
//                         src="https://images.unsplash.com/photo-1472653431158-6364773b2a56?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//                         alt="carousel-1"
//                       />
//                       <p className="legend">Family Reunion</p>
//                     </div>
//                     {/* More carousel items */}
//                   </Carousel>
//                 </Box>
//               </Container>
//             </Grow>
//           }
//         />

//         {/* Conditional route for displaying posts */}
//         <Route path="/posts" element={<Posts />}
//         />

//         {/* Login Route */}
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/forgot-password" element={<ForgotPassword />} />

//         {/* Create Post route - visible only if the user is logged in */}
//         <Route
//           path="/createpost"
//           element={
//             (
//               <Grow in>
//                 <Container>
//                   <Grid container justify="space-between" alignItems="stretch" spacing={3}>
//                     <Grid item xs={12} sm={8}>
//                       <Posts setCurrentId={setCurrentId} />
//                     </Grid>
//                     <Grid item xs={12} sm={4}>
//                       <Form currentId={currentId} setCurrentId={setCurrentId} />
//                     </Grid>
//                   </Grid>
//                 </Container>
//               </Grow>
//             )
//           }
//         />
//           <Route path="/dashboard" element={<Dashboard />} />
//         <Route path="*" element={<Navigate to="/posts" />} />
//         <Route path="/about" element={<About />} />
//       </Routes>

//       <Footer className={classes.footer} />
//     </div>
//   );
// }

// export default App;






import { Container,Grow, Grid, Box } from "@mui/material";
import { useDispatch} from "react-redux";
import { Route, Routes,Navigate } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { getPosts, login } from "./actions/actions.js";
import Posts from "./components/Posts/Posts.jsx";
import Form from "./components/Form/Form.jsx";
import useStyles from "./style";
import { useEffect, useState } from "react";
import Footer from "./components/Footer/Footer.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import About from "./components/About/About.jsx";
import Login from "./components/Login/Login.jsx";
import Signup from "./components/SignUp/Signup.jsx";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword.jsx";
import Dashboard from './components/Dashboard/Dashboard.jsx';
import Contact from "./components/Contact/Contact.jsx";

function App() {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  const classes = useStyles();
  // const location = useLocation();

  // Fetch posts when the app loads
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  // Check if the user has a token stored in localStorage
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      dispatch(login({ token }));
    }
  }, [dispatch]);

  // Function to determine heading text based on route
  // const getHeadingText = () => {
  //   if (location.pathname === "/about") {
  //     return "About";
  //   } else if (location.pathname === "/posts") {
  //     return "All Posts";
  //   } else if (location.pathname === "/login") {
  //     return "Login to your Account";
  //   } else if (location.pathname === "/signup") {
  //     return "Create your Account";
  //   } else if (location.pathname === "/contactus") {
  //     return ''; 
  //   } else if (location.pathname === "/dashboard") {
  //     return ''; 
  //   } else {
  //     return "Welcome to Memories App";
  //   }
  // };

  return (
    <div>
      {/* Render AppBar only if not on /dashboard */}

  

      <Navbar />
      <Routes>
        <Route path="/*" element={
          <Grow in>
            <Container>
              {/* Carousel Section */}
              <Box sx={{ width: "60%", margin: "auto" }}>
                <Carousel className={classes.carousel}>
                  {/* Add your carousel images */}
                  <div>
                    <img
                      src="https://images.unsplash.com/photo-1472653431158-6364773b2a56?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="carousel-1"
                    />
                    <p className="legend">Family Reunion</p>
                  </div>
                  <div>
                    <img
                      src="https://images.unsplash.com/photo-1472653431158-6364773b2a56?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="carousel-2"
                    />
                    <p className="legend">Family Reunion</p>
                  </div>
                  <div>
                    <img
                      src="https://images.unsplash.com/photo-1472653431158-6364773b2a56?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="carousel-2"
                    />
                    <p className="legend">Family Reunion</p>
                  </div>
                  <div>
                    <img
                      src="https://images.unsplash.com/photo-1472653431158-6364773b2a56?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="carousel-2"
                    />
                    <p className="legend">Family Reunion</p>
                  </div>
                  <div>
                    <img
                      src="https://images.unsplash.com/photo-1472653431158-6364773b2a56?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="carousel-2"
                    />
                    <p className="legend">Family Reunion</p>
                  </div>
                </Carousel>
              </Box>
            </Container>
          </Grow>
        } />
        
        {/* Posts route */}
        <Route path="/posts" element={<Posts />} />

        {/* Login Route */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        {/* Create Post route - visible only if the user is logged in */}
        <Route
          path="/createpost"
          element={
            <Grow in>
              <Container className={classes.container}>
                <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                  <Grid item xs={12} sm={8}>
                    <Posts setCurrentId={setCurrentId} />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <Form currentId={currentId} setCurrentId={setCurrentId} />
                  </Grid>
                </Grid>
              </Container>
            </Grow>
          }
        />

        {/* Dashboard Route */}

   
        <Route path="/contactus" element={<Contact/>} />
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Redirect to posts by default */}
        <Route path="*" element={<Navigate to="/posts" />} />

        {/* About Route */}
        <Route path="/about" element={<About />} />
      </Routes>

      <Footer className={classes.footer} />
    </div>
  );
}

export default App;
