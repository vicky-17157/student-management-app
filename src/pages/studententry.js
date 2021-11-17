import React, { useState, Fragment } from 'react'
//import StudentTable from '../Tables/studenttable'
import { Table } from '../Tables/table'
import './home.css'
import StudentFooter from './studentfooter'

const StudentDetails = () => {

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

	const studentData = [
		{ id: 1, studentname: 'Ganesh', fathername: 'shiva', mothername: 'devi',
         class: 'IX', emergencycontactnumber: '260189562', dob: '23/03/1994', 
         yearofadmission: '2009', address: '8410 Fifth Ave.Jamaica Plain, MA 02130' },

	]

	const initialStudentState = { id: '', studentname: '', fathername: '', mothername: '', class: '', 
    emergencycontactnumber: '', dob: '', yearofadmission: '', address: '' }

	// Setting state
	const [items, setItems] = useState(studentData)
	const [currentItem, setCurrentItem] = useState(initialStudentState)
	const [editing, setEditing] = useState(false)

	
	return (
		<div>
			<h1 className="center">Student Information</h1>
            
			<div >
				
				<div className="flex-large">
					<h2>Student List</h2>
					<Table rows={items} columns={columns} />
                    <StudentFooter />
				</div>
			</div>
		</div>
	)
}

export default StudentDetails;