import React from 'react';

const CompanyList = ({ companies, loading, onEdit, onDelete }) => {
  if (loading) return <div className="loading">Loading companies...</div>;
  
  if (companies.length === 0) {
    return <p>No companies found. Click "Add Company" to create one.</p>;
  }
  
  return (
    <div className="table-container">
      <table className="data-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Industry</th>
            <th>Location</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {companies.map((company) => (
            <tr key={company.id}>
              <td>{company.id}</td>
              <td>{company.name}</td>
              <td>{company.industry}</td>
              <td>{company.location}</td>
              <td>{company.email}</td>
              <td>{company.phone}</td>
              <td>
                <button className="btn btn-warning btn-sm" onClick={() => onEdit(company)}>
                  Edit
                </button>
                <button className="btn btn-danger btn-sm" onClick={() => onDelete(company.id)}>
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

export default CompanyList;