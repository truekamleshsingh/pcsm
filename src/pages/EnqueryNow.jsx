import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {
  Button,
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
} from "@mui/material";
import { franchiseeEnquery, studentEnquery } from "../services/api";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography component="div">{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [state, setState] = React.useState("");
  const handleChangeState = (event) => {
    setState(event.target.value);
  };

  const [district, setDistrict] = React.useState("");
  const handleChangeDistrict = (event) => {
    setDistrict(event.target.value);
  };



  ////// STUDENT REGISTER 
  const defaultStudentData = {
    studentName: '',
    phone: '',
    studentCourses: [],
    studentQuery: '',
    studentCity: '',
  }

  const [studentEnqueryData, setStudentEnqueryData] = React.useState(defaultStudentData)

  ///////HANDLE STUDENT Enquiry
  ////// HANDLE ON VALUE CHANGE
  const handleStudentValueonChange = (e) => {
    setStudentEnqueryData({ ...studentEnqueryData, [e.target.name]: e.target.value })
  }

  //////// HANDLE ON COURSE CHANGE 
  const handleCourseChange = (e) => {
    const { studentCourses } = studentEnqueryData
    const { value, checked } = e.target
    if (checked) {
      setStudentEnqueryData({
        ...studentEnqueryData,
        studentCourses: [...studentCourses, value]
      })
    } else {
      setStudentEnqueryData({
        ...studentEnqueryData,
        studentCourses: studentCourses.filter((e) => e !== value)
      })
    }
  }

  const handleStudentRegister = async () => {
    console.log(studentEnqueryData)
    await studentEnquery(studentEnqueryData)
  }


  ///////HANDLE Franchisee Enquiry

  const defaultFranchiseeData = {
    studyCenterName: '',
    pinCode: '',
    centerHead: '',
    email: '',
    mobileNumber: '',
    address: {
      state: state,
      district: district,

    },
    message: '',
  }

  const [franchiseeEnqueryData, setFranchiseeEnqueryData] = React.useState(defaultFranchiseeData)

  const handleFranchiseeEnquery = (e) => {
    const { tehsil, block } = franchiseeEnqueryData
    // const { block } = e.target.value.block
    const { value, name } = e.target
    setFranchiseeEnqueryData({ ...franchiseeEnqueryData, address: { state, district, tehsil, block }, [name]: value })
    // console.log(franchiseeEnquery)
  }

  const handleFranchiseeEnquerySubmit = async (e) => {
    console.log(franchiseeEnqueryData)
    await franchiseeEnquery(franchiseeEnqueryData)
  }





  //////////////////////////////// RETURN STATEMENT
  return (
    <Container
      sx={{
        width: { sx: "100%", md: "50%" },
        mt: 4,
        mb: 4,
      }}
    >
      <Paper
        sx={{
          width: "100%",
          display: "flex",
          justifyConent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: "100%",
            minHeight: 399,
          }}
        >
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="enquairy tabs"
            >
              <Tab label="Student Enquiry" {...a11yProps(0)} />
              <Tab label="Franchisee Enquiry" {...a11yProps(1)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <Typography
              variant="h6" component="div"
              sx={{ borderBottom: 1, borderColor: "divider" }}
            >
              Student Enquiry
            </Typography>
            <Container
              sx={{
                mt: 4,
              }}
            >
              <Paper
                variant="outlined"
                sx={{
                  border: "none",
                  alignItems: "center",
                }}
              >
                <TextField
                  required
                  fullWidth
                  margin="normal"
                  size="small"
                  label="Name"
                  placeholder="Enput Your Name"
                  name="studentName"
                  onChange={e => handleStudentValueonChange(e)}
                />
                <TextField
                  fullWidth
                  required
                  label="Phone"
                  placeholder="Enput Your Phone Number"
                  margin="normal"
                  size="small"
                  name="phone"
                  onChange={e => handleStudentValueonChange(e)}

                />
                <FormControl component="fieldset" margin="normal" size="small">
                  <FormLabel component="legend">Choose Courses</FormLabel>
                  <FormGroup aria-label="position" row mr={3}>
                    <FormControlLabel
                      value="Android"
                      control={<Checkbox />}
                      label="Android"
                      labelPlacement="end"
                      name="studentCourses"
                      onChange={e => handleCourseChange(e)}
                    />
                    <FormControlLabel
                      value="Internship"
                      control={<Checkbox />}
                      label="Internship"
                      labelPlacement="end"
                      name="studentCourses"
                      onChange={e => handleCourseChange(e)}
                    />
                    <FormControlLabel
                      value="CCC"
                      control={<Checkbox />}
                      label="CCC"
                      labelPlacement="end"
                      name="studentCourses"
                      onChange={e => handleCourseChange(e)}
                    />
                    <FormControlLabel
                      value="Java"
                      control={<Checkbox />}
                      label="Java"
                      labelPlacement="end"
                      name="studentCourses"
                      onChange={e => handleCourseChange(e)}
                    />
                    <FormControlLabel
                      value="PHP"
                      control={<Checkbox />}
                      label="PHP"
                      labelPlacement="end"
                      name="studentCourses"
                      onChange={e => handleCourseChange(e)}
                    />
                    <FormControlLabel
                      value="O-Level"
                      control={<Checkbox />}
                      label="O-Level"
                      labelPlacement="end"
                      name="studentCourses"
                      onChange={e => handleCourseChange(e)}
                    />
                    <FormControlLabel
                      value="Python"
                      control={<Checkbox />}
                      label="Python"
                      labelPlacement="end"
                      name="studentCourses"
                      onChange={e => handleCourseChange(e)}
                    />
                    <FormControlLabel
                      value="CSS"
                      control={<Checkbox />}
                      label="CSS"
                      labelPlacement="end"
                      name="studentCourses"
                      onChange={e => handleCourseChange(e)}
                    />
                    <FormControlLabel
                      value="Other"
                      control={<Checkbox />}
                      label="Other"
                      labelPlacement="end"
                      name="studentCourses"
                      onChange={e => handleCourseChange(e)}
                    />
                  </FormGroup>
                </FormControl>
                <TextField
                  minRows={3}
                  maxRows={7}
                  multiline
                  required
                  margin="normal"
                  size="small"
                  fullWidth
                  name="studentQuery"
                  label="Query"
                  placeholder="Enput Your Query"
                  onChange={e => handleStudentValueonChange(e)}
                ></TextField>
                <TextField
                  required
                  fullWidth
                  margin="normal"
                  size="small"
                  label="City"
                  name="studentCity"
                  placeholder="Enput Your City"
                  onChange={e => handleStudentValueonChange(e)}
                ></TextField>
                <Button variant="contained" onClick={e => handleStudentRegister(e)}>
                  Register
                </Button>
              </Paper>
            </Container>
          </TabPanel>

          {/* Franchisee Enquiry           */}
          <TabPanel value={value} index={1}>
            <Typography
              variant="h6" component="div"
              sx={{ borderBottom: 1, borderColor: "divider" }}
            >
              Franchisee Enquiry
            </Typography>
            <Container
              sx={{
                mt: 4,
              }}
            >
              <Paper
                variant="outlined"
                sx={{
                  border: "none",
                  alignItems: "center",
                }}
                component="form"
              >
                <TextField
                  required
                  fullWidth
                  margin="normal"
                  size="small"
                  label="NAME OF THE STUDY CENTER"
                  placeholder="Enput Your Study Center Name"
                  name="studyCenterName"
                  onChange={e => handleFranchiseeEnquery(e)}
                ></TextField>
                <TextField
                  fullWidth
                  required
                  label="PIN CODE"
                  placeholder="Enput Your Pin Code Number"
                  margin="normal"
                  size="small"
                  name="pinCode"
                  onChange={e => handleFranchiseeEnquery(e)}
                ></TextField>
                <TextField
                  required
                  margin="normal"
                  size="small"
                  fullWidth
                  label="CENTER HEAD / DIRECTOR'S NAME"
                  placeholder="Enput Your Center Head Name / Director Name"
                  name="centerHead"
                  onChange={e => handleFranchiseeEnquery(e)}
                ></TextField>
                <TextField
                  required
                  fullWidth
                  margin="normal"
                  size="small"
                  label="E-MAIL"
                  placeholder="Enput Your E-mail"
                  name="email"
                  onChange={e => handleFranchiseeEnquery(e)}
                ></TextField>
                <TextField
                  required
                  fullWidth
                  margin="normal"
                  size="small"
                  label="PH./ MOBILE (STD CODE)"
                  placeholder="Enput Your Mobile Number"
                  name="mobileNumber"
                  onChange={e => handleFranchiseeEnquery(e)}
                ></TextField>
                <FormControl fullWidth margin="normal" size="small">
                  <InputLabel id="selectState">State</InputLabel>
                  <Select
                    labelId="selectState"
                    id="select_State"
                    value={state}
                    label="State"
                    onChange={handleChangeState}
                  >
                    <MenuItem value={"Uttar Pradesh"}>Uttar Pradesh</MenuItem>
                    <MenuItem value={"Bihar"}>Bihar</MenuItem>
                    <MenuItem value={"Madhya Pradesh"}>Madhya Pradesh</MenuItem>
                  </Select>
                </FormControl>

                <FormControl fullWidth margin="normal" size="small">
                  <InputLabel id="selectDistrict">District</InputLabel>
                  <Select
                    labelId="selectDistrict"
                    id="select_District"
                    value={district}
                    label="District"
                    onChange={handleChangeDistrict}
                  >
                    <MenuItem disabled value="">
                      <em>Placeholder</em>
                    </MenuItem>
                    <MenuItem value={"Fatehpur"}>Fatehpur</MenuItem>
                    <MenuItem value={"Prayagraj"}>Prayagraj</MenuItem>
                    <MenuItem value={"Pratapgrah"}>Pratapgrah</MenuItem>
                  </Select>
                </FormControl>
                <TextField
                  required
                  fullWidth
                  margin="normal"
                  size="small"
                  label="TEHSIL"
                  placeholder="Enput Your Tehseel Name"
                  name="tehsil"
                  onChange={e => handleFranchiseeEnquery(e)}
                ></TextField>
                <TextField
                  required
                  fullWidth
                  margin="normal"
                  size="small"
                  label="BLOCK"
                  placeholder="Enput Your Block Name"
                  name="block"
                  onChange={e => handleFranchiseeEnquery(e)}
                ></TextField>
                <TextField
                  required
                  multiline
                  minRows={2}
                  maxRows={7}
                  fullWidth
                  margin="normal"
                  size="small"
                  label="MESSAGE"
                  placeholder="Enput Your Message"
                  name="message"
                  onChange={e => handleFranchiseeEnquery(e)}
                ></TextField>
                <Button variant="contained" onClick={handleFranchiseeEnquerySubmit}>Submit</Button>
              </Paper>
            </Container>
          </TabPanel>
        </Box>
      </Paper>
    </Container>
  );
}
