import React from 'react';
import Button from '@mui/material/Button';
import { Avatar, Grid, Paper, TextField, Typography } from "@mui/material";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

const SignUp = () => {
    const [data, setData] = useState({
        name: "",
        email: "",
        password: ""
    });

    const changeFun = (event) => {
        const { name, value } = event.target;
        setData((preValue) => {
            return {
                ...preValue,
                [name]: value,
            };
        });
    }

    const subFun = () => {
        let notesData = localStorage.getItem("signupdata") ? JSON.parse(localStorage.getItem("signupdata")) : []
        notesData.push(data);
        localStorage.setItem("signupdata", JSON.stringify(notesData));
    }

    const paperStyle = { padding: 20, height: "60vh", width: 350, margin: "50px auto", borderRadius: "10px" }
    const avatarStyle = { backgroundColor: "#1976d2" }
    const buttonStyle = { marginTop: "30px" }
    return (<>
        <Grid>
            <Paper elevation={5} style={paperStyle}>
                <Grid align="center">
                    <Avatar style={avatarStyle}><LockOutlinedIcon /></Avatar>
                    <Typography variant='h4'>Sign up</Typography>
                </Grid>

                <TextField variant="standard" label="Username" name="name" onChange={changeFun}
                    autoComplete="off" fullWidth required />

                <TextField variant="standard" label="Email" name="email" onChange={changeFun}
                    autoComplete="off" type="Email" fullWidth required />

                <TextField variant="standard" label="Password" name="password" onChange={changeFun}
                    autoComplete="off" type="password" fullWidth required />

                <Button type="submit" variant="contained" fullWidth onClick={subFun}
                    style={buttonStyle}>Sign Up</Button>


                <NavLink to='/login' variant="body2" style={{ marginLeft: "100px" }}>
                    Already have an account? Sign in
                </NavLink>

            </Paper>

        </Grid>

    </>
    );
}

export default SignUp;
