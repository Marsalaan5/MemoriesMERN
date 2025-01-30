// import axios from 'axios';
// import { useState } from 'react'
// import useStyles from './style';

// function Login() {
// const [email,setEmail] = useState();
// const [password,setPassword] = useState();
// const [error,setError] = useState();
// const classes = useStyles();

// const handleSubmit = async(e) => {
// e.preventDefault();
// try {
//     const response =  axios.post('http://localhost:5000/api/auth/login',{email,password})
//     localStorage.setItem('token',response.data.token)
//     history.push('/dashboard');
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

// export default Login\



import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import useStyles from './style';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const classes = useStyles();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
     
      const response = await axios.post('http://localhost:5000/auth/login', { email, password });

      localStorage.setItem('token', response.data.token);
      navigate('/dashboard');
    } catch (error) {
    
      setError(error.response ? error.response.data.message : 'Something went wrong!');
    }
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <h2>Login</h2>
      {error && <p className={classes.error}>{error}</p>}
      
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className={classes.input}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className={classes.input}
        required
      />
      
      <button type="submit" className={classes.button}>Login</button>
 


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
