import { Avatar, Grid, Paper, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import LoginIcon from '@mui/icons-material/Login';
import Button from "@mui/material/Button";
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';



const Login = () => {

    const [userName, setUserName] = useState();
    const [password, setPassword] = useState();

    const navigate = useNavigate();

    // localStorage.setItem("username", "Aashish");
    // localStorage.setItem("password", "123456");

    const inputUsername = (event) => {
        setUserName(event.target.value);
    }
    const inputPassword = (event) => {
        setPassword(event.target.value);
    }


    const RedirectFun = () => {
        // console.warn('data', (localStorage.getItem("signupdata")))

        // console.warn(JSON.parse(localStorage.getItem("signupdata") || "[]"));
        let name = JSON.parse(localStorage.getItem("signupdata") || "[]")
        name = name.map(item => item.name)
        let password1 = JSON.parse(localStorage.getItem("signupdata") || "[]")
        password1 = password1.map(item => item.password)
        // console.warn('===', name);
        // console.warn('==p=', password1);
        if (name.includes(userName) && password1.includes(password)) {
            navigate('/home')

        }
        else {
            alert("Invalid name & password");
        }
    }

    const paperStyle = { padding: 20, height: "55vh", width: 350, margin: "50px auto", borderRadius: "10px" }
    const avatarStyle = { backgroundColor: "#1976d2" }
    const buttonStyle = { marginTop: "30px" }
    return (<>
        <Grid>
            <Paper elevation={5} style={paperStyle}>
                <Grid align="center">
                    <Avatar style={avatarStyle}><LoginIcon /></Avatar>
                    <Typography variant='h4'>Login</Typography>
                </Grid>

                <TextField variant="standard" label="Username" onChange={inputUsername}
                    placeholder="Enter Username" fullWidth required type="text" />

                <TextField variant="standard" label="Password" placeholder="Enter Password"
                    onChange={inputPassword} type="password" fullWidth required />

                <Button variant="contained" fullWidth onClick={RedirectFun}
                    style={buttonStyle}>Login</Button>

                <NavLink to="/signup" variant="body2" style={{ marginLeft: "100px" }}>
                    Don't have an account? Sign up
                </NavLink>
            </Paper>

        </Grid>

    </>);
}

export default Login;