import React, { useState, useEffect } from 'react';
import { studentService } from '../services/studentService';
import { companyService } from '../services/companyService';
import { placementService } from '../services/placementService';

const Dashboard = () => {
  const [stats, setStats] = useState({
    students: 0,
    companies: 0,
    placements: 0
  });
  const [loading, setLoading] = useState(true);
  const [recentPlacements, setRecentPlacements] = useState([]);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      const [studentsRes, companiesRes, placementsRes] = await Promise.all([
        studentService.getAll(),
        companyService.getAll(),
        placementService.getAll()
      ]);

      setStats({
        students: studentsRes.data.length,
        companies: companiesRes.data.length,
        placements: placementsRes.data.length
      });

      const recent = placementsRes.data.slice(-5).reverse();
      setRecentPlacements(recent);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
      setLoading(false);
    }
  };

  if (loading) return <div className="loading">Loading dashboard...</div>;

  return (
    <div>
      <div className="stats-grid">
        <div className="stat-card">
          <h3>{stats.students}</h3>
          <p>Total Students</p>
        </div>
        <div className="stat-card">
          <h3>{stats.companies}</h3>
          <p>Total Companies</p>
        </div>
        <div className="stat-card">
          <h3>{stats.placements}</h3>
          <p>Total Placements</p>
        </div>
      </div>

      <div className="section">
        <div className="section-header">
          <h2>Recent Placements</h2>
        </div>
        {recentPlacements.length > 0 ? (
          <div className="table-container">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Student</th>
                  <th>Company</th>
                  <th>Position</th>
                  <th>Package</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {recentPlacements.map((placement) => (
                  <tr key={placement.id}>
                    <td>{placement.student?.name || 'N/A'}</td>
                    <td>{placement.company?.name || 'N/A'}</td>
                    <td>{placement.position}</td>
                    <td>₹{placement.packageAmount} LPA</td>
                    <td>{placement.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p>No placements recorded yet.</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;