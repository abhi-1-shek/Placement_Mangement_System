import React from 'react';

const PlacementCard = ({ placement, onEdit, onDelete }) => {
  const getStatusClass = (status) => {
    switch (status?.toLowerCase()) {
      case 'confirmed': return '#28a745';
      case 'pending': return '#ffc107';
      case 'completed': return '#17a2b8';
      case 'cancelled': return '#dc3545';
      default: return '#6c757d';
    }
  };

  return (
    <div className="info-card">
      <div className="card-header">
        <h3>{placement.position}</h3>
        <div>
          <button className="btn btn-warning btn-sm" onClick={() => onEdit(placement)}>
            Edit
          </button>
          <button className="btn btn-danger btn-sm" onClick={() => onDelete(placement.id)}>
            Delete
          </button>
        </div>
      </div>
      <div className="card-body">
        <p><strong>Student:</strong> {placement.student?.name || 'N/A'}</p>
        <p><strong>Company:</strong> {placement.company?.name || 'N/A'}</p>
        <p><strong>Package:</strong> ₹{placement.packageAmount} LPA</p>
        <p><strong>Date:</strong> {placement.placementDate || 'TBD'}</p>
        <p><strong>Status:</strong> <span style={{ color: getStatusClass(placement.status) }}>{placement.status}</span></p>
      </div>
    </div>
  );
};

export default PlacementCard;