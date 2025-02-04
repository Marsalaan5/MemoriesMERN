import { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Typography } from '@mui/material';
import useStyles from './style';

const ContactForm = () => {
  const classes = useStyles();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send a POST request to the backend API
      const response = await axios.post('http://localhost:5000/auth/contact', {
        name,
        email,
        message,
      });

      setStatus({ message: 'Message sent successfully!', success: true });
    } catch (error) {
      setStatus({ message: `There was an error sending your message. Please try again. Error: ${error.message}`, success: false });
    }
  };

  return (
    <div className={classes.contactform}>
      <div>

      <Typography variant="h4" gutterBottom className={classes.title}>
        Contact Us
      </Typography>

      <form onSubmit={handleSubmit} className={classes.form}>
        <TextField
          label="Name"
          variant="outlined"
          fullWidth
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={classes.inputField}
          />
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          required
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={classes.inputField}
          />
        <TextField
          label="Message"
          variant="outlined"
          fullWidth
          required
          multiline
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={classes.inputField}
        />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          className={classes.submitButton}
          >
          Send Message
        </Button>
      </form>

      {/* Display status message */}
      {status && (
        <Typography
        variant="body1"
        className={`${classes.statusMessage} ${status.success ? classes.successMessage : classes.errorMessage}`}
        >
          {status.message}
        </Typography>
      )}
      </div>
    </div>
  );
};

export default ContactForm;
