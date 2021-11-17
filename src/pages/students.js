import React, { Component } from "react";
import { render } from "react-dom";
import StudentApp from "../components/app";

import { Table } from "../Tables/table";
import StudentDetails from "./studententry";

export default class StudentDetail extends Component {
    constructor(props){
        super(props);
        this.state = {apiResponse:[]};
    }
    callAPI(){
        fetch("http://localhost:3000/student")
      
      .then(res => this.setState({apiResponse:res}));
      console.log(this.state.apiResponse,'apiresponse')
    };


    componentWillMount(){
        this.callAPI();
    }  

render() {
    const columns = [
        { accessor: 'studentname', label: 'Student Name' },
            { accessor: 'fathername', label: 'Father Name' },
            { accessor: 'mothername', label: 'Mother Name', },
            { accessor: 'class', label: 'Class', },
            { accessor: 'emergencycontactnumber', label: 'Emergency Contact Number' },
            { accessor: 'dob', label: 'Date of Birth' },
           { accessor: 'yearofadmission', label: 'Year of Admission' },
           { accessor: 'address', label: 'Address' },
           
       ]
        return(
            <div className="divleft">
                <header className="divright">
                    
                </header>
                <p>{this.state.apiResponse}</p>
                <div >
				
				<div className="flex-large">
					<h2>Student List</h2>
                    {console.log('api response',this.state.apiResponse)}
					<Table rows={this.state.apiResponse} columns={columns} />
                    {/* <StudentFooter /> */}
				</div>
			</div>
            </div>
        )
}    
};

