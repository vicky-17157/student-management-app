import React from 'react'

const FacultyTable = props => (
  <table>
    <thead>
      <tr>
        <th>Faculty Name</th>
        <th>Subject</th>
        <th>Classes to Handle</th>
        <th>Contact details</th>
        </tr>
    </thead>
    <tbody>
      {props.items.length > 0 ? (
        props.items.map(item => (
          <tr key={item.id}>
            <td>{item.facultyname}</td>
            <td>{item.subject}</td>
            <td>{item.classestoteach}</td>
            <td>{item.contactdetails}</td>
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

export default FacultyTable;