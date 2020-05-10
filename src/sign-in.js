import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Utils_funcs from './util/utils';

const useStyles = makeStyles((theme) => ({
  body:{
    backgroundColor:"#000",
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn({toWelcome, toPrivateGallery}) {
  const classes = useStyles();
  const login = ()=>{
    const email = document.getElementById("myEmail").value;
    const password = document.getElementById("myPassword").value;
    var request = require('request');
    var options = {
      'method': 'POST',
      'url': 'https://afternoon-gorge-52652.herokuapp.com/signin',
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
       console.log(response.body);
      if(response.statusCode ===200){
        Utils_funcs.setUserEmail(email);
        Utils_funcs.getFavouriteList();
        toPrivateGallery();
       
      }
    });

  };

  return (
    <Container component="main" maxWidth="xs" style={{color:"#fff"}}>
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          SIGN IN
        </Typography>
        <form className={classes.form} noValidate>
          <span>Email: </span>
          <TextField
            required
            fullWidth
            type="email"
            id="myEmail"
            />
          <span>Password: </span>
            <TextField
            required
            fullWidth
            type="password"
            id="myPassword"
            />
          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={login}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item>
              <Link href="#signUp" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
      </Box>
    </Container>
  );
}