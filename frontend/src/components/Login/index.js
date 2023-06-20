import React from 'react';
import { Button, TextField, makeStyles, ThemeProvider } from '@material-ui/core';
import { createTheme } from '@material-ui/core/styles';
import { GoogleLogin } from 'react-google-login';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

const useStyles = makeStyles({
  form: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '400px',
    '& > *': {
      marginBottom: '16px',
    },
  },
  textField: {
    '& label': {
      marginBottom: '5px',
    },
    '& input': {
      padding: '8px 12px',
      border: '1px solid #ccc',
      borderRadius: '4px',
    },
  },
});

const Login = () => {
  const classes = useStyles();

  const responseGoogle = (response) => {
    console.log(response);
    // Handle Google authentication response here
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="login">
        <h2>Login</h2>
        <form className={classes.form}>
          <TextField
            label="Email"
            type="email"
            required
            className={classes.textField}
          />
          <TextField
            label="Password"
            type="password"
            required
            className={classes.textField}
          />
          <Button variant="contained" color="primary" type="submit">
            Login
          </Button>
        </form>
        <GoogleLogin
          clientId="YOUR_GOOGLE_CLIENT_ID"
          buttonText="Login with Google"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
        />
      </div>
    </ThemeProvider>
  );
};

export default Login;
