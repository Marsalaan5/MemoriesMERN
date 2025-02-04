// import axios from 'axios';
// import { useState } from 'react'
// import useStyles from './style';
// import { useNavigate } from 'react-router-dom';

// function Login() {
// const [email,setEmail] = useState();
// const [password,setPassword] = useState();
// const [error,setError] = useState();
// const classes = useStyles();
// const navigate = useNavigate();

// const handleSubmit = async(e) => {
// e.preventDefault();
// try {
//     const response =  axios.post('http://localhost:5000/auth/login',{email,password})
//     localStorage.setItem('token',response.data.token)
//     navigate('/dashboard');
// } catch (error) {
//     setError(error.response.data.message);
    
// }
// };


//   return ( 
//     <form className={classes.form}
//     onSubmit={handleSubmit}>
//     <h2>Login</h2>
//     {error  && <p className={classes.error}>{error}</p>}
//     <input type="email" placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)} className={classes.input} required />
//     <input type="password" placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)}  className={classes.input} required/>
//     <button type='submit'  className={classes.button}>Login</button>
//     <button className={classes.button}>Forgot Password?</button>
//     <h4>Dont&apos;t Have an account?</h4> <button  className={classes.button}> Sign Up.</button>
//     </form>
//   )
// }

// export default Login



// import axios from 'axios';
// import { useState } from 'react';
// import { data, useNavigate } from 'react-router-dom'; 
// import { useDispatch } from 'react-redux';
// import { login } from '../../actions/actions';
// import useStyles from './style';

// function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const classes = useStyles();
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   // const [isLoading,setIsLoading] = useState(false);


// // const login = async(data) => {
// //   setError("");
// //   setIsLoading(true);
// //   try {
// //     const session = await axios.login(data);
// //     if(session) {
// //       const userData = await axios.getCurrentUser();
// //       if(userData) dispatch(authLogin(userData));
// //       navigate("/")
// //       // dispatch(authLogin(userData));

// //   } catch (error) {
// //     setError(error.message);
// //   }finally{
// //     setIsLoading(false);
// //   }
// // };



//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:5000/auth/login', { email, password });
  
    
//       console.log('API Response:', response);
  
     
//       if (response.data && response.data.token && response.data.user) {
//         localStorage.setItem('token', response.data.token);
//         const userData = {
//           // name: response.data.user.name,
//           email: response.data.user.email,
//           password: response.data.user.password,
//         };
  
//         dispatch(login(userData));
//         // navigate('/post');
//       } else {
       
//         setError('User data not found in response. Please check the login credentials.');
//       }
//     } catch (error) {
//       console.error('Login error:', error);
    
//       setError(error?.response?.data?.message || error.message || 'Something went wrong! Please try again.');
//     }
//   };
  
//   return (
//     <form className={classes.form} onSubmit={handleSubmit}>
//       <h2>Login</h2>
//       {error && <p className={classes.error}>{error}</p>}
      
//       <input
//         type="email"
//         placeholder="Email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         className={classes.input}
//         required
//       />
//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         className={classes.input}
//         required
//       />
      
//       <button type="submit" className={classes.button}>Login</button>

//       <button
//         type="button"
//         onClick={() => navigate('/forgot-password')}  
//         className={classes.button}
//         >
//         Forgot Password?
//       </button>

 
//       <h4>Don&apos;t Have an account?</h4>
//       <button
//         type="button"
//         onClick={() => navigate('/signup')}  
//         className={classes.button}
//       >
//         Sign Up
//       </button>
//     </form>
//   );
// }

// export default Login;


// import axios from 'axios';
// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import useStyles from './style';

// function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const classes = useStyles();
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:5000/auth/login', { email, password });
  
//       // Check if token exists in the response and store it in localStorage
//       if (response.data.token) {
//         localStorage.setItem('token', response.data.token); // Save token to localStorage
//         navigate('/dashboard'); // Redirect to dashboard
//       } else {
//         setError('Login failed. Please try again.');
//       }
//     } catch (error) {
//       // Handle specific error response from the backend
//       setError(error?.response?.data?.message || 'Invalid credentials');
//     }
//   };

//   return (
//     <form className={classes.form} onSubmit={handleSubmit}>
//       <h2>Login</h2>
//       {error && <p className={classes.error}>{error}</p>}
      
//       <input
//         type="email"
//         placeholder="Email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         className={classes.input}
//         required
//       />
//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         className={classes.input}
//         required
//       />
      
//       <button type="submit" className={classes.button}>Login</button>

//       <button
//         type="button"
//         onClick={() => navigate('/forgot-password')}  
//         className={classes.button}
//       >
//         Forgot Password?
//       </button>

//       <h4>Don't Have an account?</h4>
//       <button
//         type="button"
//         onClick={() => navigate('/signup')}  
//         className={classes.button}
//       >
//         Sign Up
//       </button>
//     </form>
//   );
// }

// export default Login;


// import axios from 'axios';
// import { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import useStyles from './style';

// function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const [isLoading, setIsLoading] = useState(false); // Track loading state
//   const classes = useStyles();
//   const navigate = useNavigate();

//   // Check if the user is already logged in on component mount
//   useEffect(() => {
//     if (localStorage.getItem('token')) {
//       navigate('/dashboard');
//     }
//   }, [navigate]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true); // Set loading state to true
//     setError(''); // Clear previous error messages

//     try {
//       const response = await axios.post('http://localhost:5000/auth/login', { email, password });
//       if (response.data.token) {
//         localStorage.setItem('token', response.data.token); // Save token to localStorage
//         navigate('/dashboard'); // Redirect to dashboard
//       } else {
//         setError('Login failed. Please try again.');
//       }
//     } catch (error) {
//       console.log(error)
//       setError(error?.response?.data?.message || 'Invalid credentials');
//     } finally {
//       setIsLoading(false); // Reset loading state
//     }
//   };

//   return (
//     <form className={classes.form} onSubmit={handleSubmit}>
//       <h2>Login</h2>
//       {error && <p className={classes.error}>{error}</p>}
      
//       <input
//         type="email"
//         placeholder="Email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         className={classes.input}
//         required
//       />
//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         className={classes.input}
//         required
//       />
      
//       <button type="submit" className={classes.button} disabled={isLoading}>
//         {isLoading ? 'Logging in...' : 'Login'}
//       </button>

//       <button
//         type="button"
//         onClick={() => navigate('/forgot-password')}  
//         className={classes.button}
//       >
//         Forgot Password?
//       </button>

//       <h4>Don't Have an account?</h4>
//       <button
//         type="button"
//         onClick={() => navigate('/signup')}  
//         className={classes.button}
//       >
//         Sign Up
//       </button>
//     </form>
//   );
// }

// export default Login;


// import axios from 'axios';
// import { useState } from 'react';
// import useStyles from './style';
// import { useNavigate } from 'react-router-dom';

// function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const [isLoading, setIsLoading] = useState(false); // Add loading state
//   const classes = useStyles();
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!email || !password) {
//       setError('Email and password are required.');
//       return;
//     }

//     setIsLoading(true);
//     setError('');
//     try {
//       const response = await axios.post('http://localhost:5000/auth/login', { email, password });
//       localStorage.setItem('token', response.data.token);
//       navigate('/dashboard');
//     } catch (error) {
//       setError(error.response?.data?.message || 'An error occurred during login');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <form className={classes.form} onSubmit={handleSubmit}>
//       <h2>Login</h2>
//       {error && <p className={classes.error}>{error}</p>}
//       <input
//         type="email"
//         placeholder="Email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         className={classes.input}
//         required
//       />
//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         className={classes.input}
//         required
//       />
//       <button type="submit" className={classes.button} disabled={isLoading}>
//         {isLoading ? 'Logging in...' : 'Login'}
//       </button>

//       <button
//         type="button"
//         className={classes.button}
//         onClick={() => navigate('/forgot-password')}
//       >
//         Forgot Password?
//       </button>

//       <h4>Don't Have an account?</h4>
//       <button
//         type="button"
//         className={classes.button}
//         onClick={() => navigate('/signup')}
//       >
//         Sign Up
//       </button>
//     </form>
//   );
// }

// export default Login;


// import axios from 'axios';
// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom'; 
// import useStyles from './style';

// function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const classes = useStyles();
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
     
//       const response = await axios.post('http://localhost:5000/auth/login', { email, password });

//       localStorage.setItem('token', response.data.token);
//       navigate('/dashboard');
//     } catch (error) {
//       setError(error.response ? error.response.data.message : 'Something went wrong!');
//     }
//   };

//   return (
//     <form className={classes.form} onSubmit={handleSubmit}>
//       <h2>Login</h2>
//       {error && <p className={classes.error}>{error}</p>}
      
//       <input
//         type="email"
//         placeholder="Email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         className={classes.input}
//         required
//       />
//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         className={classes.input}
//         required
//       />
      
//       <button type="submit" className={classes.button}>Login</button>
 


//       <button
//         type="button"
//         onClick={() => navigate('/forgot-password')}  
//         className={classes.button}
//         >
//         Forgot Password?
//       </button>

 
//       <h4>Don&apos;t Have an account?</h4>
//       <button
//         type="button"
//         onClick={() => navigate('/signup')}  
//         className={classes.button}
//       >
//         Sign Up
//       </button>
//     </form>
//   );
// }

// export default Login;


// import axios from 'axios';
// import { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom'; 
// import useStyles from './style';

// function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const classes = useStyles();
//   const navigate = useNavigate();

//   // Focus on email input field if there's an error
//   useEffect(() => {
//     if (error) {
//       document.getElementById('email').focus();
//     }
//   }, [error]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);
//     setError('');
    
//     try {
//       const response = await axios.post('http://localhost:5000/auth/login', { email, password });
//       localStorage.setItem('token', response.data.token);
//       navigate('/dashboard');
//     } catch (error) {
//       setError(error?.response?.data?.message || 'Something went wrong, please try again later.');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <form className={classes.form} onSubmit={handleSubmit}>
//       <h2>Login</h2>
//       {error && <p className={classes.error}>{error}</p>}
      
//       <input
//         id="email"
//         type="email"
//         placeholder="Email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         className={`${classes.input} ${error ? classes.inputError : ''}`}
//         required
//       />
//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         className={`${classes.input} ${error ? classes.inputError : ''}`}
//         required
//       />
      
//       <button type="submit" className={classes.button} disabled={isLoading}>
//         {isLoading ? 'Logging in...' : 'Login'}
//       </button>

//       <button
//         type="button"
//         onClick={() => navigate('/forgot-password')}
//         className={classes.button}
//       >
//         Forgot Password?
//       </button>

//       <h4>Don't Have an account?</h4>
//       <button
//         type="button"
//         onClick={() => navigate('/signup')}
//         className={classes.button}
//       >
//         Sign Up
//       </button>
//     </form>
//   );
// }

// export default Login;




// import axios from 'axios';
// import { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom'; 
// import useStyles from './style';

// function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const [isRedirecting, setIsRedirecting] = useState(false); // State for handling redirecting
//   const classes = useStyles();
//   const navigate = useNavigate();

//   // Focus on email input field if there's an error
//   useEffect(() => {
//     if (error) {
//       document.getElementById('email').focus();
//     }
//   }, [error]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);
//     setError('');
    
//     try {
//       const response = await axios.post('http://localhost:5000/auth/login', { email, password });
//       localStorage.setItem('token', response.data.token);

//       // Delay the redirect slightly to show any success messages or loading state
//       setTimeout(() => {
//         setIsRedirecting(true); // Indicate that we are redirecting
//         navigate('/dashboard'); // Redirect to the dashboard
//       }, 500); // Adjust delay as needed (e.g., 500ms for smooth transition)
//     } catch (error) {
//       setError(error?.response?.data?.message || 'Something went wrong, please try again later.');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <form className={classes.form} onSubmit={handleSubmit}>
//       <h2>Login</h2>
//       {error && <p className={classes.error}>{error}</p>}
      
//       <input
//         id="email"
//         type="email"
//         placeholder="Email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         className={`${classes.input} ${error ? classes.inputError : ''}`}
//         required
//       />
//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         className={`${classes.input} ${error ? classes.inputError : ''}`}
//         required
//       />
      
//       <button type="submit" className={classes.button} disabled={isLoading}>
//         {isLoading ? 'Logging in...' : 'Login'}
//       </button>

//       {/* Redirecting Message */}
//       {isRedirecting && <p className={classes.loading}>Redirecting to your dashboard...</p>}

//       <button
//         type="button"
//         onClick={() => navigate('/forgot-password')}
//         className={classes.button}
//       >
//         Forgot Password?
//       </button>

//       <h4>Don't Have an account?</h4>
//       <button
//         type="button"
//         onClick={() => navigate('/signup')}
//         className={classes.button}
//       >
//         Sign Up
//       </button>
//     </form>
//   );
// }

// export default Login;



import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import useStyles from './style';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const classes = useStyles();
  const navigate = useNavigate();

  // Check if already authenticated
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      navigate('/dashboard');  // Redirect to dashboard if token is present
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const response = await axios.post('http://localhost:5000/auth/login', { email, password });
      localStorage.setItem('token', response.data.token);
      navigate('/dashboard'); // Redirect after successful login
    } catch (error) {
      setError(error?.response?.data?.message || 'Something went wrong, please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <h2>Login</h2>
      {error && <p className={classes.error}>{error}</p>}

      <input
        id="email"
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className={`${classes.input} ${error ? classes.inputError : ''}`}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className={`${classes.input} ${error ? classes.inputError : ''}`}
        required
      />

      <button type="submit" className={classes.button} disabled={isLoading}>
        {isLoading ? 'Logging in...' : 'Login'}
      </button>

      <button
        type="button"
        onClick={() => navigate('/forgot-password')}
        className={classes.button}
      >
        Forgot Password?
      </button>

      <h4>Don&apos;t Have an account?</h4>
      <button
        type="button"
        onClick={() => navigate('/signup')}
        className={classes.button}
      >
        Sign Up
      </button>
    </form>
  );
}

export default Login;
