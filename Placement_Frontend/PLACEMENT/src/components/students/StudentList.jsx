import React from 'react';

const StudentList = ({ students, loading, onEdit, onDelete }) => {
  if (loading) return <div className="loading">Loading students...</div>;
  
  if (students.length === 0) {
    return <p>No students found. Click "Add Student" to create one.</p>;
  }
  
  return (
    <div className="table-container">
      <table className="data-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Course</th>
            <th>Percentage</th>
            <th>Grad Year</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.email}</td>
              <td>{student.phone}</td>
              <td>{student.course}</td>
              <td>{student.percentage}%</td>
              <td>{student.graduationYear}</td>
              <td>
                <button className="btn btn-warning btn-sm" onClick={() => onEdit(student)}>
                  Edit
                </button>
                <button className="btn btn-danger btn-sm" onClick={() => onDelete(student.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentList;