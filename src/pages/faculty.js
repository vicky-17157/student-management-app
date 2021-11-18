import React, { Component } from "react";
import { render } from "react-dom";
//import StudentApp from "../components/app";
import FacultyFooter from "./facultyfooter";

import { Table } from "../Tables/table";
import StudentDetails from "./studententry";
import axios from 'axios';
export default class FacultyDetail extends Component {
    state = {
        faculties: []
      }
    
    componentDidMount() {
        axios.get(`http://localhost:4000/faculty`)
          .then(res => {
            const faculties = res.data;
            this.setState({ faculties });
            console.log("=============>data==========>",faculties);
          })
      }

   

render() {
    const columns = [
        { accessor: 'name', label: 'Faculty Name' },
            { accessor: 'subject', label: 'Subject' },
            { accessor: 'address', label: 'Adress', },
            { accessor: 'qualification', label: 'Qualification', },
            { accessor: 'contactNumber', label: 'Contact_Number' },
            
           
       ]
        return(
            <div className="divleft">
                <header className="divright">
                    
                </header>
                
                <div >
				
				<div className="flex-large">
					<h2>Faculty List</h2>
                    {console.log('api response',this.state.faculties)}
					<Table rows={this.state.faculties} columns={columns} />
                    <FacultyFooter />
				</div>
			</div>
            </div>
        )
}    
};

