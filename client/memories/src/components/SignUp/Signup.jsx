import axios from "axios"
import { useState } from "react";
import useStyles from "./style";
import { useNavigate } from "react-router-dom";

function Signup() {
    const [name,setName] = useState('');
    const [email,setEmail] =useState('');
    const [password,setPassword] = useState('');
    const [error,setError] =useState('');
    const navigate = useNavigate();

    const classes = useStyles();

    const handleSubmit= async(e)=>{
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/auth/signup',{name,email,password})
            localStorage.setItem('token',response.data.token);
            navigate('/dashboard')
        } catch (error) {
            setError(error.response.data.message)
        }
    }
  return (
    <form className={classes.form}
    onSubmit={handleSubmit}>
     <h2>Create Your Account</h2>
     {error && <p className={classes.error}>{error}</p>}
     <input type="text" placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)} className={classes.input} required/>
     <input type="email" placeholder="Email" value={email} onChange={(e)=> setEmail(e.target.value)}  className={classes.input} required/>
     <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}  className={classes.input} required
     />
 
     <button type="submit"  className={classes.button}>SignUp</button>
     <h4>Already have an account?</h4>

     <button
        type="button"
        onClick={() => navigate('/login')}  
        className={classes.button}
        >
        Login
      </button>
     
    </form>
  )
}

export default Signup