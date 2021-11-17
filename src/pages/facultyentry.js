import React, { useState, Fragment } from 'react'
import FacultyTable from '../Tables/facultytable'
import { Table } from '../Tables/table'
import FacultyFooter from './facultyfooter'
import './home.css'

const FacultyDetails = () => {

	const columns = [
		{ accessor: 'facultyname', label: 'Faculty Name' },
		{ accessor: 'subject', label: 'Subject' },
		{ accessor: 'classestoteach', label: 'Classes to Handle', },
		{ accessor: 'contactdetails', label: 'Contact details', },
		
        
]

	const facultyData = [
		{ id: 1, facultyname: 'Leni', subject: 'Power systems', classestoteach: 'VIII to XI',
         contactdetails: '5645287415' },

	]

	const initialFacultyState = { id: '', facultyname: '', subject: '', classestoteach: '', class: '', 
                                contactdetails: '' }

	// Setting state
	const [items, setItems] = useState(facultyData)
	const [currentItem, setCurrentItem] = useState(initialFacultyState)
	const [editing, setEditing] = useState(false)

	
	return (
		<div >
			<h1 className="center">Faculty Information</h1>
			<div >
				
				<div className="flex-large">
					<h2>Faculty List</h2>
					<Table rows={items} columns={columns}  />
                    
				</div>
			</div>
		</div>
	)
}

export default FacultyDetails;