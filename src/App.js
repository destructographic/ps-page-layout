/* App.js */

import React from 'react';
import employeesData from './employeesData.json';
import './App.css';


/* for this demo, function will display info for employee 10001 */
function buildEmployeePage() {
  const employee = employeesData.find((employee) => employee.employeeId === "10001");

  if (!employee) {
    return null; // employee not found
  }

  const { name, position, callOffice, callMobile, sms, email } = employee;

  return (
    <div className="employeePageStyle">
      <div className="headerStyle">
        <h2>Employee</h2>
      </div>

      <div className="employeeCardStyle">
        <div className="employeeCardHeader">
          <div className="avatarStyle employeeAvatarStyle"></div>
          <div>
            <div className="nameStyle">{name}</div>
            <div className="positionStyle">{position}</div>
          </div>
        </div>

        {callOffice && (
          <div className="employeeCardDetail">
            <div className="employeeCardDetailHeader">Call Office</div>
            <div className="employeeCardDetailText">{callOffice}</div>
          </div>
        )}

        {callMobile && (
          <div className="employeeCardDetail">
            <div className="employeeCardDetailHeader">Call Mobile</div>
            <div className="employeeCardDetailText">{callMobile}</div>
          </div>
        )}

        {sms && (
          <div className="employeeCardDetail">
            <div className="employeeCardDetailHeader">SMS</div>
            <div className="employeeCardDetailText">{sms}</div>
          </div>
        )}

        {email && (
          <div className="employeeCardDetail">
            <div className="employeeCardDetailHeader">Email</div>
            <div className="employeeCardDetailText">{email}</div>
          </div>
        )}
      </div>
    </div>
  );
}



function App() {


  const buildEmployeeList = () => {
    return employeesData.map((employee, index) => (
      <li
        key={index}
        className={index !== employeesData.length - 1 ? "employeeListItemStyle" : "employeeListItemStyle lastItem"}
      >
        <div className="avatarStyle"></div>
        <div>
          <div className="nameStyle">{employee.name}</div>
          <div className="positionStyle">{employee.position}</div>
        </div>
      </li>
    ));
  };



  return (
    <>
      <div className="appStyle">
        <div className="homePageStyle">
          <div className="headerStyle">
            <h2>Employee Directory</h2>
          </div>
          <div className="searchBarStyle">
            <input type="text" className="inputStyle" placeholder="Search" />
          </div>

          <ul className="employeeListStyle">
            {buildEmployeeList()}
          </ul>
        </div>

        {buildEmployeePage()}
      </div>
    </>
  );
}


export default App;
