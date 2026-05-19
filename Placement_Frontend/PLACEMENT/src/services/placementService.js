import api from './api';

export const placementService = {
  getAll: () => api.get('/placements'),
  getById: (id) => api.get(`/placements/${id}`),
  create: (placement) => api.post('/placements', placement),
  update: (id, placement) => api.put(`/placements/${id}`, placement),
  delete: (id) => api.delete(`/placements/${id}`),
};