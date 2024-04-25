import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./views/login/Login";
import Dashboard from "./views/dashboard/Index";
import LandingPage from "./views/Landing Page/index";
import Awareness from "./views/Awareness/index";
import SignUp from "./views/signup/index";
import ChooseOPCO from './views/Choose OPCO/index'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} exact />
          {/* <Route path="/dashboard" element={<Dashboard />} /> */}
          {/* <Route path="/" element={<LandingPage />} exact /> */}
          {/* <Route path="/awareness" element={<Awareness />} /> */}
          <Route path="/signup" element={<SignUp />} />
          {/* <Route path="/opco" element={<ChooseOPCO />} /> */}
          {/* <Route path="/managerview" element={<ManagerView />} />
          <Route path="/analystview" element={<AnalystView />} />
          <Route path ="/analystTable" element={<ClientTable/>}/> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
