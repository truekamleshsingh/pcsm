import Cancel from '@mui/icons-material/Cancel'
import { Button, Checkbox, Container, Dialog, FormControl, FormControlLabel, Grid, IconButton, InputAdornment, Paper, Slide, TextField, Tooltip, Typography } from '@mui/material'
import React, { useState } from 'react'
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CopyrightIcon from "@mui/icons-material/Copyright";
import VisibilityIcon from "@mui/icons-material/Visibility";
import LoginIcon from "@mui/icons-material/Login";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

const Login = () => {

    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const [values, setValues] = React.useState({
        password: "",

        showPassword: false,
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <>
            <Dialog
                open={open}
                onClose={handleClose}
                TransitionComponent={Transition}
            >
                <Paper>
                    <Container
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <Grid container direction="column" alignItems="center">
                            <Grid item>
                                <AccountCircleIcon style={{ fontSize: 100 }} />
                            </Grid>
                            <Grid item>
                                <Typography>Please Sign In</Typography>
                            </Grid>
                            <Grid item>
                                <TextField
                                    name="email"
                                    type="email"
                                    label="E-mail"
                                    placeholder="onlyPfixs@gmail.com"
                                    size="small"
                                    margin="dense"
                                    sx={{
                                        width: 250,
                                    }}
                                />
                            </Grid>
                            <Grid item>
                                <TextField
                                    sx={{
                                        width: 250,
                                    }}
                                    name="password"
                                    placeholder="password"
                                    label="Password"
                                    size="small"
                                    margin="dense"
                                    type={values.showPassword ? "text" : "password"}
                                    value={values.password}
                                    onChange={handleChange("password")}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <IconButton
                                                    onClick={handleClickShowPassword}
                                                    onMouseDown={handleMouseDownPassword}
                                                    edge="end"
                                                >
                                                    {values.showPassword ? (
                                                        <VisibilityOffIcon />
                                                    ) : (
                                                        <VisibilityIcon />
                                                    )}
                                                </IconButton>
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            </Grid>
                            <Grid container direction={'column'} >
                                <Grid item>
                                    <FormControl>
                                        <FormControlLabel
                                            value={""}
                                            label="Remember me"
                                            control={<Checkbox />}
                                            labelPlacement="end"
                                        />
                                    </FormControl>
                                </Grid>

                                <Grid item>
                                    <Button variant="contained" fullWidth onClick={handleClose} >
                                        Sign In
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Typography
                                        variant="subtitle2"
                                        sx={{
                                            display: "flex",
                                            justifyContent: "center",
                                            mt: 1,
                                            mb: 1,
                                        }}
                                    >
                                        <CopyrightIcon sx={{ mr: 1 }} />
                                        2022 - 2023
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid item>
                                <Tooltip title="Close" arrow placement="right">
                                    <IconButton onClick={handleClose}>
                                        <Cancel />
                                    </IconButton>
                                </Tooltip>
                            </Grid>
                        </Grid>
                    </Container>
                </Paper>
            </Dialog>


            <Tooltip title="Login" placement={"left"} arrow>
                <Button variant="outlined" onClick={handleClickOpen}>
                    Login
                    <LoginIcon />
                </Button>
            </Tooltip>
        </>
    )
}

export default Login