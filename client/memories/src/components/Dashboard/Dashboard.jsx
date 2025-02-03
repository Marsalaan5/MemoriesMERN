



// // import { useSelector } from 'react-redux';
// // import { Navigate } from 'react-router-dom';
// // import { Container, Typography, Button, Box, Paper } from '@mui/material';
// // import useStyles from './style'



// // function Dashboard() {
// //   // Get authentication state from Redux store
// //   const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
// //   const classes = useStyles();

// //   if (!isAuthenticated) {
// //     return <Navigate to="/login" />; // Redirect to login if not authenticated
// //   }

// //   return (
// //     <Container className={classes.root}>
// //       <Paper className={classes.paper}>
// //         <Typography variant="h4" className={classes.welcomeText}>
// //           Welcome to your Dashboard!
// //         </Typography>

// //         <Typography variant="body1" paragraph>
// //           This is a private area only accessible to authenticated users. You can manage your posts, view your profile, and access other features.
// //         </Typography>

// //         <Button
// //           variant="contained"
// //           className={classes.logoutButton}
// //           onClick={() => {
// //             localStorage.removeItem('token'); // Remove token from localStorage
// //             // Dispatch logout action (redux action) if applicable
// //           }}
// //         >
// //           Logout
// //         </Button>
// //       </Paper>
// //     </Container>
// //   );
// // }

// // export default Dashboard;




// import { useSelector, useDispatch } from 'react-redux';
// import { Navigate } from 'react-router-dom';
// import { Container, Typography, Button, Paper } from '@mui/material';
// import useStyles from './style';
// import { logout } from '../../actions/actions'; // Import logout action

// function Dashboard() {
//   const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
//   const dispatch = useDispatch(); // Initialize useDispatch to dispatch actions
//   const classes = useStyles();

//   if (!isAuthenticated) {
//     return <Navigate to="/login" />; // Redirect to login if not authenticated
//   }

//   const handleLogout = () => {
//     localStorage.removeItem('token'); // Remove token from localStorage
//     dispatch(logout()); // Dispatch logout action to clear Redux state
//   };

//   return (
//     <Container className={classes.root}>
//       <Paper className={classes.paper}>
//         <Typography variant="h4" className={classes.welcomeText}>
//           Welcome to your Dashboard!
//         </Typography>

//         <Typography variant="body1" paragraph>
//           This is a private area only accessible to authenticated users. You can manage your posts, view your profile, and access other features.
//         </Typography>

//         <Button
//           variant="contained"
//           className={classes.logoutButton}
//           onClick={handleLogout} // Trigger logout
//         >
//           Logout
//         </Button>
//       </Paper>
//     </Container>
//   );
// }

// export default Dashboard;



import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { Container, Typography, Button, Paper } from '@mui/material';
import useStyles from './style';
import { logout } from '../../actions/actions'; // Import logout action

function Dashboard() {
  const { isAuthenticated, user } = useSelector((state) => state.auth); // Access both isAuthenticated and user info
  const dispatch = useDispatch();
  const classes = useStyles();

  // Redirect to login if not authenticated
  if (!isAuthenticated) {
    return <Navigate to="/login" />; 
  }

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove token from localStorage
    dispatch(logout()); // Dispatch logout action to clear Redux state
  };

  return (
    <Container className={classes.root}>
      <Paper className={classes.paper}>
        <Typography variant="h4" className={classes.welcomeText}>
          Welcome, {user?.name}!
        </Typography>

        <Typography variant="body1" paragraph>
          This is a private area only accessible to authenticated users. You can manage your posts, view your profile, and access other features.
        </Typography>

        <Button
          variant="contained"
          className={classes.logoutButton}
          onClick={handleLogout} // Trigger logout
        >
          Logout
        </Button>
      </Paper>
    </Container>
  );
}

export default Dashboard;
