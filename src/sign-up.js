import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Utils_funcs from './util/utils';


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp({toSignIn, toPrivateGallery}) {
  const classes = useStyles();
  const handleClick = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const request = require('request');
    const options = {
      'method': 'POST',
      'url': 'https://afternoon-gorge-52652.herokuapp.com/signup',
      'headers': {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      form: {
        'email': email,
        'password': password
      }
    };
    request(options, function (error, response) {
      if (error) throw new Error(error);
      switch (response.statusCode) {
        case 200:
          Utils_funcs.getFavouriteList();
          Utils_funcs.setUserEmail(email);
          toPrivateGallery();
          break;
        case 400:
          alert(JSON.parse(response.body).msg);
          break;
        default:
          alert("Server Error");
      }
    });
  };
  return (
      <Container component="main" maxWidth="xs" style={{color:"#fff"}}>
        <CssBaseline />
        <div className={classes.paper}>
         
          <Typography component="h1" variant="h5">
            SIGN UP
          </Typography>
          <form className={classes.form} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12}>
              <span>Email: </span>
                <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="email"
                    name="email"
                    autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
              <span>Password: </span>
                <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                />
              </Grid>

            </Grid>
            <Button
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={handleClick}
            >
              Sign Up
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link href="#signIn" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={5}>
        </Box>
      </Container>
  );
}