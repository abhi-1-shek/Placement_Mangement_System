import React from 'react';

const CompanyCard = ({ company, onEdit, onDelete }) => {
  return (
    <div className="info-card">
      <div className="card-header">
        <h3>{company.name}</h3>
        <div>
          <button className="btn btn-warning btn-sm" onClick={() => onEdit(company)}>
            Edit
          </button>
          <button className="btn btn-danger btn-sm" onClick={() => onDelete(company.id)}>
            Delete
          </button>
        </div>
      </div>
      <div className="card-body">
        <p><strong>Industry:</strong> {company.industry || 'N/A'}</p>
        <p><strong>Location:</strong> {company.location || 'N/A'}</p>
        <p><strong>Email:</strong> {company.email || 'N/A'}</p>
        <p><strong>Phone:</strong> {company.phone || 'N/A'}</p>
      </div>
    </div>
  );
};

export default CompanyCard;