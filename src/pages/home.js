import React from 'react';
import { useState } from 'react';
import img from './Admission.jpg';
import im from './Undergraduates.jpg';
import imgs from './faculty.jpg'
import './home.css'
import AdmissionDetails from './admissionentry';
import {  Route, Router, Link, Switch } from "react-router-dom";
import Footer from './footer';






    
const Academicinfo = () =>{
    const [isPreviewShown, setPreviewShown] = useState(false);
    function handleSubmit(e){
        e.preventDefault();
    
        setPreviewShown(true); // Here we change state
    }
  return (
    <div className="container">
      <h1 className="h1">Academic Information</h1>
      <div className="container">
          <h3 className="center">Academic Details</h3>
          <p className="center">MGM students come from across the U.S. and the world, representing diverse experiences, backgrounds and cultures.</p>
          
          {/* <button onClick={clickme} className="btn">Apply Now</button> */}

          
        
          <Link to="/admission">
            <div><img src={img} alt='Logo' />
            <h1 className="text-on-image">Apply Now</h1>
            </div>
            </Link>
            
            
            <div className="divleft">
            <h2 >Student Details </h2>
          <p >About 1,700 freshmen and 30 transfer students are admitted to Stanford each year. We review each applicant with an eye to academic excellence, intellectual vitality and personal context.</p>
          <Link to="/student">
              <div><img src={im} alt='Logo'/>
              <h1>Click here for Student Information</h1>
              </div>
              </Link> 
              </div>
        
        
        <div className="divright">
          <h3>Faculty Details</h3>
          <p>MGM Engineering has long been at the forefront of groundbreaking research, education and innovation. Through the development and application of engineering principles across disciplines, we are tackling the major challenges of the 21st century.</p>
          <Link to='/faculty'>
              <div><img src={imgs} alt='Logo'/>
              <h1>Click here for Faculty information</h1>
              
              </div>
              </Link>
          </div>
          
          
      </div>
    </div>
  );
}

export default Academicinfo;


