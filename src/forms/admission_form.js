import React, { useState } from 'react'
import './admission_form.css'

const AddAdmissionForm = props => {
	const initialAdmissionState = { studentname: '' ,fathername:'', mothername:'', dob:'', 
                                age:'', contactdetails:'', address:'', classinfo:''}
	const [ item, setItem ] = useState(initialAdmissionState)

	const handleInputChange = event => {
		const { name, value } = event.target

		setItem({ ...item, [name]: value })
	}

	return (
		<form className='body'
			onSubmit={event => {
				event.preventDefault()
				if (!item.studentname || !item.fathername) return

				props.addItem(item)
				setItem(initialAdmissionState)
			}}
		>
			<div className="st"><label>Student_Name</label>
			<input type="text" name="studentname" value={item.studentname} onChange={handleInputChange} />
			</div>
			
			<div className="horizontal-group">
			<div className="form-group left">
			<label>Father_Name</label>
			<input type="text" name="fathername" value={item.fathername} onChange={handleInputChange} />
			</div>
			<div className="form-group right">
			<label>Mother_Name</label>
			<input type="text" name="mothername" value={item.mothername} onChange={handleInputChange} />
			</div>
				</div>
			
			<div className="horizontal-group">
				<div className="form-group left">
				<label>Date-of-Birth</label>
				<input type="text" name="dob" value={item.dob} onChange={handleInputChange} />
				</div>
				<div className="form-group right">
				<label>Age</label>
				<input type="number" name="age" value={item.age} onChange={handleInputChange} />
				</div>
			</div>

			<div className="horizontal-group">
				<div className="form-group left">
				<label>Contact-Number</label>
				<input type="number" name="contactdetails" value={item.contactdetails} onChange={handleInputChange} />
				</div>
				<div className="form-group right">
				<label>Address</label>
				<input type="text" name="address" value={item.address} onChange={handleInputChange} />
				</div>
			</div>
            <label>Class-Info</label>
			<input type="text" name="classinfo" value={item.classinfo} onChange={handleInputChange} />
			<div className="center"><button>Add new Detail</button></div>
			
		</form>
	)
}

export default AddAdmissionForm