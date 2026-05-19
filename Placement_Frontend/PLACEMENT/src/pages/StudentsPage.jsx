import React, { useState, useEffect } from 'react';
import StudentList from '../components/students/StudentList';
import StudentForm from '../components/students/StudentForm';
import { studentService } from '../services/studentService';

const StudentsPage = () => {
  const [students, setStudents] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingStudent, setEditingStudent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await studentService.getAll();
      setStudents(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching students:', error);
      setLoading(false);
    }
  };

  const handleSubmit = async (studentData) => {
    try {
      if (editingStudent) {
        await studentService.update(editingStudent.id, studentData);
        setMessage({ type: 'success', text: 'Student updated successfully!' });
      } else {
        await studentService.create(studentData);
        setMessage({ type: 'success', text: 'Student added successfully!' });
      }
      fetchStudents();
      setShowForm(false);
      setEditingStudent(null);
      setTimeout(() => setMessage(null), 3000);
    } catch (error) {
      setMessage({ type: 'error', text: 'Error saving student!' });
      setTimeout(() => setMessage(null), 3000);
    }
  };

  const handleEdit = (student) => {
    setEditingStudent(student);
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this student?')) {
      try {
        await studentService.delete(id);
        fetchStudents();
        setMessage({ type: 'success', text: 'Student deleted successfully!' });
        setTimeout(() => setMessage(null), 3000);
      } catch (error) {
        setMessage({ type: 'error', text: 'Error deleting student!' });
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
          <h2>Student Management</h2>
          <button 
            className="btn btn-primary" 
            onClick={() => { setShowForm(!showForm); setEditingStudent(null); }}
          >
            {showForm ? 'Cancel' : 'Add Student'}
          </button>
        </div>
        
        {showForm && (
          <StudentForm 
            onSubmit={handleSubmit} 
            initialData={editingStudent}
            onCancel={() => { setShowForm(false); setEditingStudent(null); }}
          />
        )}
        
        <StudentList 
          students={students} 
          loading={loading}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </div>
    </div>
  );
};

export default StudentsPage;