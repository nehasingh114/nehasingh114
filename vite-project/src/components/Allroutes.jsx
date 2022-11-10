import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import PrivateRoute from "./PrivateRoute";
import Recharge from "./Recharge";
import Services from "./Services";
import Signup from "./Signup";
import Invite from "./Invite";
import Agent from "./Agent";
import Withdrawal from "./Withdrawal";
export default function Allroutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/recharge" element={<Recharge/>}/>
      <Route path="/services" element={<Services/>}/>
      <Route path="/invite" element={<Invite/>}/>
      <Route path="/withdrawal" element={<Withdrawal/>}/>
      <Route path="/agent" element={<Agent/>}/>
      <Route
        path="/home"



        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
          // <Home/>
        }
      />
    </Routes>
  );
}
