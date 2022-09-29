import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Services from "./pages/Services";
import CertificateVarify from "./pages/CertificateVarify";
import EnqueryNow from "./pages/EnqueryNow";
import ContactUs from "./pages/ContactUs";
import PageNotFound from "./pages/PageNotFound";
import { createTheme, Paper, ThemeProvider } from "@mui/material";
import OnlineQuiz from "./pages/OnlineQuiz";
import Certificates from "./pages/Certificates";
import PhotoGallery from "./pages/PhotoGallery";
import Footer from "./components/Footer";
import AboutPCSM from "./pages/AboutPCSM";
import ChairmanMessage from "./pages/ChairmanMessage";
import Insfratructure from "./pages/Insfratructure";
import OurMissionAndVission from "./pages/OurMissionAndVission";
import AboutUs from "./pages/AboutUs";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReactHooksForm from '../src/pages/ReactHooksForm.jsx';

const theme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <BrowserRouter>
      <ToastContainer position="top-center" />
      <Paper
        variant={"outlined"}
        sx={{
          background: "#eee",
          border: "none",
          boxShadow: "none",
        }}
      >
        <NavBar />
        {/* <Header/> 
            <TestAnything /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/services" element={<Services />} />
          <Route path="/certificateVarify" element={<CertificateVarify />} />
          <Route path="/enqueryNow" element={<EnqueryNow />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/onlineQuiz" element={<OnlineQuiz />} />
          <Route path="/certificates" element={<Certificates />} />
          <Route path="/photoGallery" element={<PhotoGallery />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/aboutPCSM" element={<AboutPCSM />} />
          <Route path="/chairmanMessage" element={<ChairmanMessage />} />
          <Route path="/directorMessage" element={<ChairmanMessage />} />
          <Route path="/Insfratructure" element={<Insfratructure />} />
          <Route path="/ourMissionAndVission" element={<OurMissionAndVission />} />
          <Route path="/rectform" element={<ReactHooksForm />} />

        </Routes>
        <ThemeProvider theme={theme}>
          <Footer />
        </ThemeProvider>
      </Paper>
    </BrowserRouter>
  );
}

export default App;
