import React, { useState, useEffect } from 'react';
import CompanyList from '../components/companies/CompanyList';
import CompanyForm from '../components/companies/CompanyForm';
import { companyService } from '../services/companyService';

const CompaniesPage = () => {
  const [companies, setCompanies] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingCompany, setEditingCompany] = useState(null);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    fetchCompanies();
  }, []);

  const fetchCompanies = async () => {
    try {
      const response = await companyService.getAll();
      setCompanies(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching companies:', error);
      setLoading(false);
    }
  };

  const handleSubmit = async (companyData) => {
    try {
      if (editingCompany) {
        await companyService.update(editingCompany.id, companyData);
        setMessage({ type: 'success', text: 'Company updated successfully!' });
      } else {
        await companyService.create(companyData);
        setMessage({ type: 'success', text: 'Company added successfully!' });
      }
      fetchCompanies();
      setShowForm(false);
      setEditingCompany(null);
      setTimeout(() => setMessage(null), 3000);
    } catch (error) {
      setMessage({ type: 'error', text: 'Error saving company!' });
      setTimeout(() => setMessage(null), 3000);
    }
  };

  const handleEdit = (company) => {
    setEditingCompany(company);
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this company?')) {
      try {
        await companyService.delete(id);
        fetchCompanies();
        setMessage({ type: 'success', text: 'Company deleted successfully!' });
        setTimeout(() => setMessage(null), 3000);
      } catch (error) {
        setMessage({ type: 'error', text: 'Error deleting company!' });
        setTimeout(() => setMessage(null), 3000);
      }
    }
  };

  return (
    <div>
      {message && (
        <div className={`alert alert-${message.type}`}>
          {message.text}
        </div>
      )}
      
      <div className="section">
        <div className="section-header">
          <h2>Company Management</h2>
          <button 
            className="btn btn-primary" 
            onClick={() => { setShowForm(!showForm); setEditingCompany(null); }}
          >
            {showForm ? 'Cancel' : 'Add Company'}
          </button>
        </div>
        
        {showForm && (
          <CompanyForm 
            onSubmit={handleSubmit} 
            initialData={editingCompany}
            onCancel={() => { setShowForm(false); setEditingCompany(null); }}
          />
        )}
        
        <CompanyList 
          companies={companies} 
          loading={loading}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </div>
    </div>
  );
};

export default CompaniesPage;