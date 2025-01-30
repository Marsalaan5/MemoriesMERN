import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import useStyles from "../Footer/style";


function ForgotPassword() {
const[email,setEmail] =useState("");
const[error,setError]=useState("");
const[message,setMessage] = useState("");
const classes = useStyles();
const navigate = useNavigate();

const handleSubmit = async(e)=>{
    e.preventDefault();
    try{
        const response = await axios.post('http://localhost:5000/auth/forgot-password',{email});

      setMessage(response.data.message); 
      setError(''); 
    } catch (error) {
      setError(error.response ? error.response.data.message : 'Something went wrong!');
      setMessage('');
    }
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <h2>Forgot Password</h2>
      
      {error && <p className={classes.error}>{error}</p>}

      {message && <p className={classes.success}>{message}</p>}

      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className={classes.input}
        required
      />
      
      <button type="submit" className={classes.button}>Send Reset Link</button>
      
   
      <button
        type="button"
        onClick={() => navigate('/login')}
        className={classes.button}
      >
        Back to Login
      </button>
    </form>
  );
}

export default ForgotPassword;
