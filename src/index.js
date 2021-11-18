import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//import StudentApp from './components/app';
import AdmissionDetails from './pages/admissionentry';
import StudentDetail from './pages/students';
import FacultyDetails from './pages/facultyentry';
import Academicinfo from './pages/home'
import FacultyDetail from './pages/faculty'
//import AddAdmissionForm from './forms/admission_form';

/*ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);*/

/*ReactDOM.render(
  <React.StrictMode>
    <StudentApp />
  </React.StrictMode>,
  document.getElementById('root')
);*/

ReactDOM.render(
  <Router>
     <Switch>
        <Route exact path="/" component={Academicinfo}/>
        <Route exact path="/admission" component={AdmissionDetails}/>
        <Route exact path="/student" component={StudentDetail}/>
        <Route exact path="/faculty" component={FacultyDetail}/>
    </Switch>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
