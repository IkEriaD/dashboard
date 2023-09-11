import React, { useEffect, useState } from "react";
import "../Header/Header.css";
import Search from "../Header/search-line.svg";
import Notification from "../Header/notification-4-line.svg";
import Set from "../Header/settings-2-line.svg";
import Dash from "../Header/dashboard-line.svg";
import Workflow from "../Header/stack-overflow-line.svg";
import Historyy from "../Header/history-line.svg";
import Helpp from "../Header/question-line.svg";
import Logoutt from "../Header/logout-circle-line.svg";
import Workflows from "../Workflows/Workflows";
import Dashboard from "../Dashboard/Dashboard";
import WorkflowsHistory from "../WorkflowsHistory/WorkflowsHistory";
import Settings from "../Settings/Settings";
import Help from "../Help/Help";
import Logout from "../Logout/Logout";

function Header() {
  const [selectedOption, setSelectedOption] = useState(`dashboard`);

  function handleDefaultClick(prop) {
    setSelectedOption(prop);
  }
  useEffect(() => {
    console.log(selectedOption); // FOR CHECKING......
  }, [selectedOption]);

  
  return (
    <section>
      <div className="header-container">
        <div className="part-1">
          <div className="logo">
            <div>Logo</div>
          </div>

          <ul>
            <li onClick={() => handleDefaultClick(`dashboard`)}>
              <img src={Dash} /> Dashboard
            </li>
            <li onClick={() => handleDefaultClick(`workflows`)}>
              <img src={Workflow} /> Workflows
            </li>
            <li onClick={() => handleDefaultClick(`workflowshistory`)}>
              <img src={Historyy} /> Workflows History
            </li>
            <li onClick={() => handleDefaultClick(`settings`)}>
              <img src={Set} /> Settings
            </li>
            <li onClick={() => handleDefaultClick(`help`)} className="help">
              <img src={Helpp} /> Help
            </li>
            <li onClick={() => handleDefaultClick(`logout`)}>
              <img src={Logoutt} /> Logout
            </li>
          </ul>
        </div>

        <div className="part-2">
          <div className="inputs">
            <img src={Search} className="search-icon" />
            <input type="text" placeholder="Search for workflows, apps" />
          </div>
          <div className="icons">
            <img src={Notification} className="notification-icon" />
            <img src={Set} className="settings-icon" />
          </div>
        </div>


        {/* HEADER CONTAINER ENDS HERE ...............................  */}



        {/* PASSING THE PROPS FROM WORKFLOWS TO HEADER ............  */}

        {selectedOption === `dashboard` && <Dashboard />}
        {selectedOption === `workflows` && <Workflows />}
        {selectedOption === `workflowshistory` && <WorkflowsHistory />}
        {selectedOption === `settings` && <Settings />}
        {selectedOption === `help` && <Help />}
        {selectedOption === `logout` && <Logout />}

         {/* PASSING THE PROPS FROM WORKFLOWS TO HEADER ENDS HERE .........*/}

         
        {/* {array.map((menuItems) => (
         <li key={menuItems.name}>{menuItems.tag === `inactive`}</li> 
        ))} */}

      </div>
    </section>
  );
}

export default Header;

// const array = [
//   { name: "davids", tag: "active" },
//   { name: "emeka", tag: "inactive" }, 
// ];

// function Arryyy() {
//   return(
//     <ul>
//       {array.map((menuItems) => (
//         <li key={menuItems.name}>{menuItems.name}</li>
//       ))}
//     </ul>
//   )
// }