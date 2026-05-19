import React from 'react';

const StudentCard = ({ student, onEdit, onDelete }) => {
  return (
    <div className="info-card">
      <div className="card-header">
        <h3>{student.name}</h3>
        <div>
          <button className="btn btn-warning btn-sm" onClick={() => onEdit(student)}>
            Edit
          </button>
          <button className="btn btn-danger btn-sm" onClick={() => onDelete(student.id)}>
            Delete
          </button>
        </div>
      </div>
      <div className="card-body">
        <p><strong>Email:</strong> {student.email}</p>
        <p><strong>Phone:</strong> {student.phone || 'N/A'}</p>
        <p><strong>Course:</strong> {student.course || 'N/A'}</p>
        <p><strong>Percentage:</strong> {student.percentage || 'N/A'}%</p>
        <p><strong>Graduation Year:</strong> {student.graduationYear || 'N/A'}</p>
      </div>
    </div>
  );
};

export default StudentCard;