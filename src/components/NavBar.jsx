import logo from "../images/pcsm_logo_1.png";
import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  styled,
  Button,
  Tooltip,
  Menu,
  MenuItem,
  Typography,
  Dialog,
  Slide,
  IconButton,
  Paper,
  Container,
  Grid,
  TextField,
  FormControl,
  FormControlLabel,
  Checkbox,
  InputAdornment,
  createTheme,
  useMediaQuery,
  ThemeProvider,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import LoginIcon from "@mui/icons-material/Login";
import ApprovalIcon from "@mui/icons-material/Approval";
import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";
import { yellow } from "@mui/material/colors";
import { NavLink } from "react-router-dom";
import PopupState, { bindMenu, bindTrigger } from "material-ui-popup-state";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CopyrightIcon from "@mui/icons-material/Copyright";
import Cancel from "@mui/icons-material/Cancel";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import DrawerCompPre from "./DrawerCompPre";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const theme = createTheme({
  palette: {
    mode: "dark",
  },
});

const StyledAppBar = styled(AppBar)`
  background: white;
`;
const StyledAppBarBlue = styled(AppBar)`
  background: #2f6ca9;
  // padding-top: 65px;
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: inherit;
`;

const StyledToolbar = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
`;

const StyledImg = styled("img")`
  height: 50px;
  margin-bottom: 4px;
`;
const StyledButton = styled(Button)`
  color: white;
`;

const StyledButtonHome = styled(Button)`
  margin-right: 10px;
`;

function NavBar() {
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

  // Breakpoint

  const isMatch = useMediaQuery(theme.breakpoints.down('md'))



  return (
    <>
      <StyledAppBar position="sticky">
        <StyledToolbar>
          <div>
            <StyledNavLink to="/">
              <StyledImg src={logo} alt="Logo"></StyledImg>
            </StyledNavLink>
          </div>
          {isMatch ? <div>
            <ThemeProvider theme={theme}>
              <DrawerCompPre />
            </ThemeProvider>
          </div> :

            <div>
              {/* Login Dialog */}
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
                <StyledButtonHome variant="outlined" onClick={handleClickOpen}>
                  Login
                  <LoginIcon />
                </StyledButtonHome>
              </Tooltip>
              <StyledNavLink to={"/services"}>
                <Tooltip title="Services" placement={"bottom"} arrow>
                  <StyledButtonHome variant="outlined">
                    Services
                    <MiscellaneousServicesIcon />
                  </StyledButtonHome>
                </Tooltip>
              </StyledNavLink>
              <StyledNavLink to={"/certificateVarify"}>
                <Tooltip title="Certificate Varify" placement={"bottom"} arrow>
                  <StyledButtonHome variant="outlined">
                    Certificate Varify
                    <ApprovalIcon />
                  </StyledButtonHome>
                </Tooltip>
              </StyledNavLink>
            </div>
          }
        </StyledToolbar>
      </StyledAppBar>



      {/* ///////Styled App Bar blue */}

      {isMatch ? console.log("Close") :
        <StyledAppBarBlue position="sticky">
          <StyledToolbar>
            <div>
              <StyledNavLink to="/">
                <Tooltip title="Home" placement="right" arrow>
                  <IconButton>
                    <HomeIcon fontSize="large" sx={{ color: yellow[900] }} />
                  </IconButton>
                </Tooltip>
              </StyledNavLink>
            </div>
            <div>
              <StyledNavLink to="/enqueryNow">

                <StyledButton>Enquery Now</StyledButton>

              </StyledNavLink>
              <PopupState popupId="about_us" variant="popover">
                {(popupState) => (
                  <>

                    <StyledButton
                      endIcon={<ArrowDropDownIcon />}
                      {...bindTrigger(popupState)}
                    >
                      About us
                    </StyledButton>

                    <Menu {...bindMenu(popupState)}>

                      <StyledNavLink to={'/aboutPCSM'}>
                        <MenuItem onClick={popupState.close}>About PCSM</MenuItem>
                      </StyledNavLink>

                      <StyledNavLink to={'/chairmanMessage'}>
                        <MenuItem onClick={popupState.close}>
                          Chairman Message
                        </MenuItem>
                      </StyledNavLink>

                      <StyledNavLink to={'/directorMessage'} >
                        <MenuItem onClick={popupState.close}>
                          Director Message
                        </MenuItem>
                      </StyledNavLink>

                      <StyledNavLink to={'/insfratructure'} >
                        <MenuItem onClick={popupState.close}>
                          Insfratructure
                        </MenuItem>
                      </StyledNavLink>

                      <StyledNavLink to={'/ourMissionAndVission'} >
                        <MenuItem onClick={popupState.close}>
                          Our mission &#38; Vission
                        </MenuItem>
                      </StyledNavLink>

                    </Menu>
                  </>
                )}
              </PopupState>

              <PopupState popupId="course_offered" variant="popover">
                {(popupState) => (
                  <>

                    <StyledButton
                      endIcon={<ArrowDropDownIcon />}
                      {...bindTrigger(popupState)}
                    >
                      Course Offered
                    </StyledButton>

                    <Menu {...bindMenu(popupState)}>

                      <StyledNavLink to={'/certificateCourses'} >
                        <MenuItem onClick={popupState.close}>
                          Certificate Courses
                        </MenuItem>
                      </StyledNavLink>

                      <StyledNavLink to={'/nielitCourses'} >
                        <MenuItem onClick={popupState.close}>
                          NIELIT Courses
                        </MenuItem>
                      </StyledNavLink>

                      <StyledNavLink to={'/universityCourses'} >
                        <MenuItem onClick={popupState.close}>
                          University Courses
                        </MenuItem>
                      </StyledNavLink>

                      <StyledNavLink to={'/pcsmYogaCourses'} >
                        <MenuItem onClick={popupState.close}>
                          PCSM Yoga Courses
                        </MenuItem>
                      </StyledNavLink>

                    </Menu>
                  </>
                )}
              </PopupState>

              <PopupState popupId="course_offered" variant="popper">
                {(popupState) => (
                  <>

                    <StyledButton
                      endIcon={<ArrowDropDownIcon />}
                      {...bindTrigger(popupState)}
                    >
                      Get In Touch
                    </StyledButton>

                    <Menu {...bindMenu(popupState)}>

                      <StyledNavLink to={'/studentReg'} >
                        <MenuItem onClick={popupState.close}>
                          Student Registration
                        </MenuItem>
                      </StyledNavLink>

                      <StyledNavLink to={'/examination'} >
                        <MenuItem onClick={popupState.close}>Examination</MenuItem>
                      </StyledNavLink>

                      <StyledNavLink to={'/studyCenter'} >
                        <MenuItem onClick={popupState.close}>
                          Study Centers
                        </MenuItem>
                      </StyledNavLink>

                    </Menu>
                  </>
                )}
              </PopupState>

              <PopupState popupId="course_offered" variant="popover">
                {(popupState) => (
                  <>

                    <StyledButton
                      endIcon={<ArrowDropDownIcon />}
                      {...bindTrigger(popupState)}
                    >
                      Affiliation
                    </StyledButton>

                    <Menu {...bindMenu(popupState)}>

                      <StyledNavLink to={'/how'} >
                        <MenuItem onClick={popupState.close}>How To</MenuItem>
                      </StyledNavLink>

                      <StyledNavLink to={'/downloadForm'} >
                        <MenuItem onClick={popupState.close}>
                          Download Form
                        </MenuItem>
                      </StyledNavLink>

                      <StyledNavLink to={'/agreementForm'} >
                        <MenuItem onClick={popupState.close}>
                          Agreement Form
                        </MenuItem>
                      </StyledNavLink>

                      <StyledNavLink to={'/checkStatus'} >
                        <MenuItem onClick={popupState.close}>Check Status</MenuItem>
                      </StyledNavLink>

                    </Menu>
                  </>
                )}
              </PopupState>

              <PopupState popupId="course_offered" variant="popover">
                {(popupState) => (
                  <>

                    <StyledButton
                      endIcon={<ArrowDropDownIcon />}
                      {...bindTrigger(popupState)}
                    >
                      Downloads
                    </StyledButton>

                    <Menu {...bindMenu(popupState)}>

                      <StyledNavLink to={'/getECertificate'} >
                        <MenuItem onClick={popupState.close}>
                          Get e-Certificates
                        </MenuItem>
                      </StyledNavLink>

                      <StyledNavLink to={'/courseSyallabus'} >
                        <MenuItem onClick={popupState.close}>
                          Course Syallabus
                        </MenuItem>
                      </StyledNavLink>

                      <StyledNavLink to={'/samplePapers'} >
                        <MenuItem onClick={popupState.close}>
                          Sample Papers
                        </MenuItem>
                      </StyledNavLink>

                      <StyledNavLink to={'/blogging'} >
                        <MenuItem onClick={popupState.close}>Blogging</MenuItem>
                      </StyledNavLink>
                    </Menu>
                  </>
                )}
              </PopupState>
              <StyledNavLink to="/contactUs">

                <StyledButton>Contact us</StyledButton>

              </StyledNavLink>
            </div>
          </StyledToolbar>
        </StyledAppBarBlue>
      }

    </>
  );
}

export default NavBar;
