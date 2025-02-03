import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: 600,
    padding: theme.spacing(3),
    margin: "auto",
    marginTop: theme.spacing(5),
  },
  title: {
    textAlign: "center",
    marginBottom: theme.spacing(3),
    color: "#1976d2", // Set a color for the title
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  inputField: {
    marginBottom: theme.spacing(2),
  },
  submitButton: {
    marginTop: theme.spacing(3),
    padding: theme.spacing(1),
  },
}));

export default useStyles;
