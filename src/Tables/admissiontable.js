import React from 'react'

const AdmissionTable = props => (
  <table>
    <thead>
      <tr>
        <th>Student-Name</th>
        <th>Father-Name</th>
        <th>Mother-Name</th>
        <th>Date-of Birth</th>
        <th>Age</th>
        <th>Contact details</th>
        <th>Address</th>
        <th>Class Information</th>
        </tr>
    </thead>
    <tbody>
      {props.items.length > 0 ? (
        props.items.map(item => (
          <tr key={item.id}>
            <td>{item.studentname}</td>
            <td>{item.fathername}</td>
            <td>{item.mothername}</td>
            <td>{item.dob}</td>
            <td>{item.age}</td>
            <td>{item.contactdetails}</td>
            <td>{item.address}</td>
            <td>{item.classinfo}</td>
            
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

export default AdmissionTable;