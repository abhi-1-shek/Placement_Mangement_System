import React, { useState, useEffect } from 'react';

const StudentForm = ({ onSubmit, initialData, onCancel }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    percentage: '',
    graduationYear: ''
  });

  useEffect(() => {
    if (initialData) {
      setFormData({
        name: initialData.name || '',
        email: initialData.email || '',
        phone: initialData.phone || '',
        course: initialData.course || '',
        percentage: initialData.percentage || '',
        graduationYear: initialData.graduationYear || ''
      });
    }
  }, [initialData]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h3>{initialData ? 'Edit Student' : 'Add New Student'}</h3>
      <div className="form-group">
        <label>Name *</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label>Email *</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label>Phone</label>
        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label>Course</label>
        <input type="text" name="course" value={formData.course} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label>Percentage</label>
        <input type="number" step="0.01" name="percentage" value={formData.percentage} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label>Graduation Year</label>
        <input type="number" name="graduationYear" value={formData.graduationYear} onChange={handleChange} />
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

export default StudentForm;