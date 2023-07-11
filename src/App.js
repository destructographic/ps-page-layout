/* App.js */

import React from 'react';
import employeesData from './employeesData.json';
import './App.css';


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


  const buildEmployeePage = () => {
    return (
      <div className="employeePageStyle">
        <div className="headerStyle">
          <h2>Employee</h2>
        </div>

        <div className="employeeCardStyle">
          <div className="employeeCardHeader">
            <div className="avatarStyle employeeAvatarStyle"></div>
            <div>
              <div className="nameStyle">Julie Taylor</div>
              <div className="positionStyle">VP of Marketing</div>
            </div>
          </div>

          <div className="employeeCardDetail">
            <div className="employeeCardDetailHeader">Call Office</div>
            <div className="employeeCardDetailText">781-000-0002</div>
          </div>

          <div className="employeeCardDetail">
            <div className="employeeCardDetailHeader">Call Mobile</div>
            <div className="employeeCardDetailText">617-000-0002</div>
          </div>

          <div className="employeeCardDetail">
            <div className="employeeCardDetailHeader">SMS</div>
            <div className="employeeCardDetailText">617-000-0002</div>
          </div>

          <div className="employeeCardDetail">
            <div className="employeeCardDetailHeader">Email</div>
            <div className="employeeCardDetailText">jtaylor@fakemail.com</div>
          </div>
        </div>
      </div>
    );
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
