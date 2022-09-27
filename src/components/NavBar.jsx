import logo from "../images/pcsm_logo_1.png";
import React from "react";
import {
  AppBar,
  Toolbar,
  styled,
  Button,
  Tooltip,
  Menu,
  MenuItem,
  IconButton,
  createTheme,
  useMediaQuery,
  ThemeProvider,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ApprovalIcon from "@mui/icons-material/Approval";
import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";
import { yellow } from "@mui/material/colors";
import { NavLink } from "react-router-dom";
import PopupState, { bindMenu, bindTrigger } from "material-ui-popup-state";
import DrawerCompPre from "./DrawerCompPre";
import Login from "./Login";

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
              <Login />
              <StyledNavLink to={"/services"} sx={{ ml:1 }}>
                <Tooltip title="Services" placement={"bottom"} arrow>
                  <StyledButtonHome variant="outlined">
                    Services
                    <MiscellaneousServicesIcon />
                  </StyledButtonHome>
                </Tooltip>
              </StyledNavLink>
              <StyledNavLink to={"/certificateVarify"} >
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

      {isMatch ? undefined :
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
