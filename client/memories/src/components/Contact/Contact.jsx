import { useForm } from "react-hook-form";
import useStyles from "./style"; // Ensure your style file exists and is correctly imported
import { TextField, Button, Container, Typography } from "@mui/material";

function Contact() {
  const classes = useStyles(); // Access styles using useStyles

  // Setting up form handling with react-hook-form
  const { register, handleSubmit, formState: { errors } } = useForm();
  
  // Handle form submission
  const onSubmit = (data) => {
    console.log(data); // Log submitted form data
  };

  return (
    <Container className={classes.container}>
      {/* Title/Heading */}
      <Typography variant="h4" className={classes.title}>
        Contact Us
      </Typography>

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
        {/* Example Field - You can customize it to your actual form field */}
        <TextField
          {...register("example")}
          defaultValue="test"
          label="Example"
          variant="outlined"
          fullWidth
          className={classes.inputField}
        />

        {/* Required Field with Validation */}
        <TextField
          {...register("exampleRequired", { required: "This field is required" })}
          label="Required Field"
          variant="outlined"
          fullWidth
          error={!!errors.exampleRequired} // Check if there's an error
          helperText={errors.exampleRequired ? errors.exampleRequired.message : ""}
          className={classes.inputField}
        />

        {/* Submit Button */}
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          className={classes.submitButton}
        >
          Submit
        </Button>
      </form>
    </Container>
  );
}

export default Contact;
