import React, { useState, useEffect } from 'react';

const PlacementForm = ({ onSubmit, initialData, students, companies, onCancel }) => {
  const [formData, setFormData] = useState({
    student: { id: '' },
    company: { id: '' },
    position: '',
    packageAmount: '',
    placementDate: '',
    status: 'Pending'
  });

  useEffect(() => {
    if (initialData) {
      setFormData({
        student: { id: initialData.student?.id || '' },
        company: { id: initialData.company?.id || '' },
        position: initialData.position || '',
        packageAmount: initialData.packageAmount || '',
        placementDate: initialData.placementDate || '',
        status: initialData.status || 'Pending'
      });
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'studentId') {
      setFormData({ ...formData, student: { id: value } });
    } else if (name === 'companyId') {
      setFormData({ ...formData, company: { id: value } });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h3>{initialData ? 'Edit Placement' : 'Add New Placement'}</h3>
      <div className="form-group">
        <label>Student *</label>
        <select name="studentId" value={formData.student.id} onChange={handleChange} required>
          <option value="">Select Student</option>
          {students.map((student) => (
            <option key={student.id} value={student.id}>
              {student.name} - {student.email}
            </option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label>Company *</label>
        <select name="companyId" value={formData.company.id} onChange={handleChange} required>
          <option value="">Select Company</option>
          {companies.map((company) => (
            <option key={company.id} value={company.id}>
              {company.name} - {company.location || 'Location N/A'}
            </option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label>Position *</label>
        <input type="text" name="position" value={formData.position} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label>Package Amount (LPA) *</label>
        <input type="number" step="0.01" name="packageAmount" value={formData.packageAmount} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label>Placement Date</label>
        <input type="date" name="placementDate" value={formData.placementDate} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label>Status</label>
        <select name="status" value={formData.status} onChange={handleChange}>
          <option value="Pending">Pending</option>
          <option value="Confirmed">Confirmed</option>
          <option value="Completed">Completed</option>
          <option value="Cancelled">Cancelled</option>
        </select>
      </div>
      <div className="form-actions">
        <button type="submit" className="btn btn-primary">
          {initialData ? 'Update' : 'Save'}
        </button>
        <button type="button" className="btn btn-secondary" onClick={onCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default PlacementForm;