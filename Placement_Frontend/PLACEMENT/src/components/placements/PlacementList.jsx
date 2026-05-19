import React from 'react';

const PlacementList = ({ placements, loading, onEdit, onDelete }) => {
  if (loading) return <div className="loading">Loading placements...</div>;
  
  if (placements.length === 0) {
    return <p>No placements recorded. Click "Add Placement" to create one.</p>;
  }
  
  return (
    <div className="table-container">
      <table className="data-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Student</th>
            <th>Company</th>
            <th>Position</th>
            <th>Package (LPA)</th>
            <th>Placement Date</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {placements.map((placement) => (
            <tr key={placement.id}>
              <td>{placement.id}</td>
              <td>{placement.student?.name || 'N/A'}</td>
              <td>{placement.company?.name || 'N/A'}</td>
              <td>{placement.position}</td>
              <td>₹{placement.packageAmount}</td>
              <td>{placement.placementDate}</td>
              <td>
                <span className={`status-badge status-${placement.status?.toLowerCase()}`}>
                  {placement.status}
                </span>
              </td>
              <td>
                <button className="btn btn-warning btn-sm" onClick={() => onEdit(placement)}>
                  Edit
                </button>
                <button className="btn btn-danger btn-sm" onClick={() => onDelete(placement.id)}>
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

export default PlacementList;