import React, { useEffect } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { Divider } from "@material-ui/core";
import SignInWithGoogle from "../components/SignInWithGoogle";
import { getToken } from "../components/getToken";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage: "url(https://source.unsplash.com/random)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function RegisterLogin(props) {
  const classes = useStyles();
  const [islogin, setislogin] = React.useState(true);
  const [fname, setFname] = React.useState("");
  const [lname, setLname] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [rememberPassword, setRememberPassowrd] = React.useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const res = await axios.post("http://localhost:8000/auth/token/",data = {
    //   username :
    // });
  };

  useEffect(() => {
    (async () => {
      let data = await getToken();
      console.log(data);
      if (data) {
        props.history.push("/");
      } else {
        document.getElementById("navbar").style.display = "none";
        document.getElementById("loading-background").style.display =
          "none";
      }
    })();
  }, []);

  let getGoogleToken = (token) => {
    if (token) {
      props.history.push("/");
      document.getElementById("navbar").style.display = "block";
    }
  };

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid
        item
        xs={12}
        sm={8}
        md={5}
        component={Paper}
        elevation={6}
        square
      >
        <div className={classes.paper}>
          <h1>JobSeekers</h1>
          <form className={classes.form} onSubmit={handleSubmit}>
            {!islogin && (
              <Grid container xs={12} spacing={1} justify="space-between">
                <Grid item xs={6}>
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    label="FirstName"
                    value={fname}
                    onChange={(e) => {
                      setFname(e.target.value);
                    }}
                    size="small"
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    label="lastname"
                    onChange={(e) => {
                      setLname(e.target.value);
                    }}
                    value={lname}
                    size="small"
                  />
                </Grid>
              </Grid>
            )}
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Email Address"
              type="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={email}
              size="small"
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Password"
              type="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              value={password}
              size="small"
            />
            <FormControlLabel
              control={
                <Checkbox
                  value="remember"
                  color="primary"
                  value={rememberPassword}
                  onChange={(e) => {
                    setRememberPassowrd(!rememberPassword);
                  }}
                />
              }
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              {islogin ? "Login" : "Register"}
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link
                  color="primary"
                  onClick={(e) => {
                    e.preventDefault();
                    setislogin(!islogin);
                  }}
                >
                  {islogin
                    ? "Dont have an account sign in"
                    : "Already have an account?"}
                </Link>
              </Grid>
            </Grid>
            <Divider style={{ margin: "10px 0" }} />
            <Grid
              xs={12}
              item
              container
              direction="row"
              justify="center"
              alignItems="center"
            >
              <SignInWithGoogle getGoogleToken={getGoogleToken} />
            </Grid>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}
