import React from 'react'

const StudentTable = props => (
  <table>
    <thead>
      <tr>
        <th>Student Name</th>
        <th>Father Name</th>
        <th>Mother Name</th>
        <th>Class</th>
        <th>Emergency Contact Number</th>
        <th>Date of Birth</th>
        <th>Year of Admission</th>
        <th>Address</th>
        </tr>
    </thead>
    <tbody>
      {props.items.length > 0 ? (
        props.items.map(item => (
          <tr key={item.id}>
            <td>{item.studentname}</td>
            <td>{item.fathername}</td>
            <td>{item.mothername}</td>
            <td>{item.class}</td>
            <td>{item.emergencycontactnumber}</td>
            <td>{item.dob}</td>
            <td>{item.yearofadmission}</td>
            <td>{item.address}</td>
            <td>
              <button
                onClick={() => {
                  props.editRow(item)
                }}
                className="button muted-button"
              >
                Edit
              </button>
              <button
                onClick={() => props.deleteItem(item.id)}
                className="button muted-button"
              >
                Delete
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No Items</td>
        </tr>
      )}
    </tbody>
  </table>
)

export default StudentTable;