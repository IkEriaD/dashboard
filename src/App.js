import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";
import Header from "./Components/Header/Header";
import Dashboard from "./Components/Dashboard/Dashboard";
import Workflows from "./Components/Workflows/Workflows";
import Settings from "./Components/Settings/Settings";
import WorkflowsHistory from "./Components/WorkflowsHistory/WorkflowsHistory";
import All from "./Components/All/All";
import Active from "./Components/Active/Active";
import Inactive from "./Components/Inactive/Inactive";
import Draft from "./Components/Draft/Draft";


function App() {
  return (
   <Router>


<div>
  <Routes>
    <Route path="/header" element={< Header />}></Route>
    <Route path="/dashboard" element={< Dashboard />}></Route>
    <Route path="/workflows" element={< Workflows />}></Route>
    <Route path="/settings" element={< Settings />}></Route>
    <Route path="/workflowshistory" element={< WorkflowsHistory />}></Route>
    <Route path="/all" element={< All />}></Route>
    <Route path="/active" element={< Active />}></Route>
    <Route path="/inactive" element={< Inactive />}></Route>
    <Route path="/draft" element={< Draft />}></Route>
  </Routes>
</div>
</Router>

//  <div>
// <Header />
// </div> 
  );
}

export default App;
