const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

// Helper function for API calls
const apiCall = async (endpoint, method = 'GET', data = null, token = null) => {
  const headers = {
    'Content-Type': 'application/json',
  };
  
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }
  
  const config = {
    method,
    headers,
    body: data ? JSON.stringify(data) : null,
  };
  
  let response;
  try {
    response = await fetch(`${API_URL}${endpoint}`, config);
  } catch {
    throw new Error('Backend server is not reachable. Please start the backend and try again.');
  }

  const result = await response.json().catch(() => ({
    message: 'Invalid server response',
  }));
  
  if (!response.ok) {
    throw new Error(result.message || 'Something went wrong');
  }
  
  return result;
};

// Appointment Services
export const appointmentService = {
  create: (appointmentData) => apiCall('/appointments', 'POST', appointmentData),
  getAll: (token) => apiCall('/appointments', 'GET', null, token),
  getMy: (token) => apiCall('/appointments/my', 'GET', null, token),
  getById: (id, token) => apiCall(`/appointments/${id}`, 'GET', null, token),
  updateStatus: (id, status, token) => apiCall(`/appointments/${id}`, 'PUT', { status }, token),
  update: (id, appointmentData, token) => apiCall(`/appointments/${id}`, 'PUT', appointmentData, token),
  initiatePayment: (id, data, token) => apiCall(`/appointments/${id}/payment`, 'POST', data, token),
  delete: (id, token) => apiCall(`/appointments/${id}`, 'DELETE', null, token),
};

// Contact Services
export const contactService = {
  submit: (contactData) => apiCall('/contacts', 'POST', contactData),
  getAll: (token) => apiCall('/contacts', 'GET', null, token),
  markAsRead: (id, token) => apiCall(`/contacts/${id}/read`, 'PUT', null, token),
  markAsReplied: (id, token) => apiCall(`/contacts/${id}/replied`, 'PUT', null, token),
  delete: (id, token) => apiCall(`/contacts/${id}`, 'DELETE', null, token),
};

export const dashboardService = {
  overview: (token) => apiCall('/dashboard/overview', 'GET', null, token),
};

export const serviceService = {
  getAll: (token) => apiCall('/services', 'GET', null, token),
  create: (data, token) => apiCall('/services', 'POST', data, token),
  update: (id, data, token) => apiCall(`/services/${id}`, 'PUT', data, token),
  delete: (id, token) => apiCall(`/services/${id}`, 'DELETE', null, token),
};

export const treatmentService = {
  getAll: (token) => apiCall('/treatments', 'GET', null, token),
  create: (data, token) => apiCall('/treatments', 'POST', data, token),
  update: (id, data, token) => apiCall(`/treatments/${id}`, 'PUT', data, token),
  delete: (id, token) => apiCall(`/treatments/${id}`, 'DELETE', null, token),
};

export const patientService = {
  getAll: (token, search = '') => apiCall(`/patients${search ? `?search=${encodeURIComponent(search)}` : ''}`, 'GET', null, token),
  create: (data, token) => apiCall('/patients', 'POST', data, token),
  update: (id, data, token) => apiCall(`/patients/${id}`, 'PUT', data, token),
  delete: (id, token) => apiCall(`/patients/${id}`, 'DELETE', null, token),
  history: (id, token) => apiCall(`/patients/${id}/history`, 'GET', null, token),
};

export const settingService = {
  get: (token) => apiCall('/settings', 'GET', null, token),
  update: (data, token) => apiCall('/settings', 'PUT', data, token),
};

// User/Auth Services
export const authService = {
  register: (userData) => apiCall('/users/register', 'POST', userData),
  createAdmin: (userData) => apiCall('/users/create-admin', 'POST', userData),
  login: (credentials) => apiCall('/users/login', 'POST', credentials),
  getMe: (token) => apiCall('/users/me', 'GET', null, token),
};

export default apiCall;
