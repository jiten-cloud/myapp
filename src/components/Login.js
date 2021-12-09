import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";

import { useState } from "react";

import "./Login.css";

function LoginForm() {
  const [loginId, setLoginId] = useState();
  const [password, setPassword] = useState();

  function localset() {
    localStorage.setItem(loginId, password);
  }
  return (
    <Card
      className="card"
      style={{ boxShadow: "12px 12px 2px 1px rgba(0, 0, 285, .2)" }}
    >
      <CardContent>
        <img src="https://img.icons8.com/ios/50/000000/speech-bubble-with-dots.png" />
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Welcome Back,
        </Typography>
        <Typography variant="h5" component="div">
          Log In
        </Typography>
        <div className="data">
          <FormGroup>
            <TextField
              onChange={(e) => setLoginId(e.target.value)}
              required
              id="outlined-basic"
              sx={{ m: 1 }}
              label="Login Id"
              variant="outlined"
            />
            <TextField
              onChange={(e) => setPassword(e.target.value)}
              required
              id="outlined-basic"
              sx={{ m: 1 }}
              label="Password"
              variant="outlined"
              type="password"
            />
            <FormControlLabel
              control={<Switch size="small" defaultChecked />}
              label="Remmber password"
            />
            <a href="#" target="_self">
              Forgot Password
            </a>
          </FormGroup>
        </div>
      </CardContent>
      <CardActions>
        <Button
          onClick={localset}
          variant="contained"
          sx={{ mx: "auto" }}
          href="#text-buttons"
        >
          Log In
        </Button>
      </CardActions>
    </Card>
  );
}

function SignUP({ isSignup }) {
  const [state, setState] = useState(false);
  const changestate = () => {
    isSignup(true);
  };
  return (
    <div>
      {state ? (
        <LoginForm />
      ) : (
        <Card
          className="card"
          sx={{ boxShadow: "12px 12px 2px 1px rgba(6, 6, 20, .2)" }}
        >
          <CardContent className="card-content">
            <img
              style={{ width: 80, height: 80 }}
              src="https://img.icons8.com/color/48/000000/linux--v2.png"
            />
            <h2>Sign Up</h2>
            <span>it's easier to sign up now</span>
            <Button variant="contained" href="#text-buttons">
              Continue with Facebook
            </Button>
            <Button
              variant="contained"
              href="#text-buttons"
              onClick={changestate}
            >
              i'll use email or phone
            </Button>
            <span>Already have account?</span>
            <a href="#" onClick={() => setState(true)}>
              Login
            </a>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
const Login = () => {
  const [signup, setSignup] = useState(false);
  console.log(signup);
  return (
    <Container sx={{ display: "flex" }} className="new-container">
      <div className="login">
        {signup == false ? (
          <SignUP isSignup={(data) => setSignup(data)} />
        ) : (
          <div>
            <Card
              className="card"
              style={{ boxShadow: "12px 12px 2px 1px rgba(0, 0, 285, .2)" }}
            >
              <CardContent>
                <img src="https://img.icons8.com/ios/50/000000/speech-bubble-with-dots.png" />

                <Typography variant="h5" component="div">
                  Sign Up
                </Typography>
                <div className="data">
                  <FormGroup>
                    <TextField
                      required
                      id="outlined-basic"
                      sx={{ m: 1 }}
                      label="User Name"
                      variant="outlined"
                    />
                    <TextField
                      required
                      id="outlined-basic"
                      sx={{ m: 1 }}
                      label="Email Address"
                      variant="outlined"
                      type="email"
                    />
                    <TextField
                      required
                      id="outlined-basic"
                      sx={{ m: 1 }}
                      label="Password"
                      variant="outlined"
                      type="password"
                    />
                    <FormControlLabel
                      control={<Switch size="small" defaultChecked />}
                      label="I accept the terms and policy"
                    />
                  </FormGroup>
                </div>
              </CardContent>
              <CardActions>
                <Button
                  variant="contained"
                  sx={{ mx: "auto" }}
                  href="#text-buttons"
                >
                  Sign up
                </Button>
              </CardActions>
            </Card>
          </div>
        )}
      </div>
    </Container>
  );
};

export default Login;
