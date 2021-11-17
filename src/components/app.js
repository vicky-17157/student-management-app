import React, { Component } from 'react'
import Navbar from '../navbar/navbar';
import Academicinfo from '../pages/home';
import AdmissionDetails from '../pages/admissionentry';
import StudentDetail from '../pages/students';
import FacultyDetails from '../pages/facultyentry';
//import FacultyDetails from './facultyentry'
import {  Route, Router, Link, Switch } from "react-router-dom";
import AddAdmissionForm from '../forms/admission_form';
//import { Link,Route } from 'react';

function StudentApp(){
  
        return (
            <Router>
              <navbar />
            <div className="th,td">
              
              <Switch>
                  <Route path="/" component={Academicinfo}></Route>
              </Switch>
              <Switch>
                  <Route path="/admission" component={AdmissionDetails}></Route>
              </Switch>
              <Switch>
                  <Route path="/student" component={StudentDetail}></Route>
              </Switch>
              <Switch>
                  <Route path="/faculty" component={FacultyDetails}></Route>
              </Switch>
            </div>
            {/* <div>
              <Link to="/faculty">Faculty Information</Link>
            </div>
            <div>
              <Link to="/academic">Admission Information</Link>
            </div> */}
      
            <hr />
      
            <Switch>
            <Route exact path="/">
                <Academicinfo />
              </Route>
              <Route exact path="/admission">
                <AdmissionDetails />
              </Route>
               <Route path="/student">
                <StudentDetail />
              </Route>
              <Route path="/faculty">
                <FacultyDetails />
              </Route>  
            </Switch>
          </Router>
        );
    };


export default StudentApp;
