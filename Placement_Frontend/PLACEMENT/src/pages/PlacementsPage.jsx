import React, { useState, useEffect } from 'react';
import PlacementList from '../components/placements/PlacementList';
import PlacementForm from '../components/placements/PlacementForm';
import { placementService } from '../services/placementService';
import { studentService } from '../services/studentService';
import { companyService } from '../services/companyService';

const PlacementsPage = () => {
  const [placements, setPlacements] = useState([]);
  const [students, setStudents] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingPlacement, setEditingPlacement] = useState(null);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [placementsRes, studentsRes, companiesRes] = await Promise.all([
        placementService.getAll(),
        studentService.getAll(),
        companyService.getAll()
      ]);
      setPlacements(placementsRes.data);
      setStudents(studentsRes.data);
      setCompanies(companiesRes.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false);
    }
  };

  const handleSubmit = async (placementData) => {
    try {
      if (editingPlacement) {
        await placementService.update(editingPlacement.id, placementData);
        setMessage({ type: 'success', text: 'Placement updated successfully!' });
      } else {
        await placementService.create(placementData);
        setMessage({ type: 'success', text: 'Placement added successfully!' });
      }
      fetchData();
      setShowForm(false);
      setEditingPlacement(null);
      setTimeout(() => setMessage(null), 3000);
    } catch (error) {
      setMessage({ type: 'error', text: 'Error saving placement!' });
      setTimeout(() => setMessage(null), 3000);
    }
  };

  const handleEdit = (placement) => {
    setEditingPlacement(placement);
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this placement record?')) {
      try {
        await placementService.delete(id);
        fetchData();
        setMessage({ type: 'success', text: 'Placement deleted successfully!' });
        setTimeout(() => setMessage(null), 3000);
      } catch (error) {
        setMessage({ type: 'error', text: 'Error deleting placement!' });
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
          <h2>Placement Management</h2>
          <button 
            className="btn btn-primary" 
            onClick={() => { setShowForm(!showForm); setEditingPlacement(null); }}
          >
            {showForm ? 'Cancel' : 'Add Placement'}
          </button>
        </div>
        
        {showForm && (
          <PlacementForm 
            onSubmit={handleSubmit} 
            initialData={editingPlacement}
            students={students}
            companies={companies}
            onCancel={() => { setShowForm(false); setEditingPlacement(null); }}
          />
        )}
        
        <PlacementList 
          placements={placements} 
          loading={loading}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </div>
    </div>
  );
};

export default PlacementsPage;