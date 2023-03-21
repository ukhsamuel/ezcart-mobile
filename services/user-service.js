import http from '../http';

export const signUp = async data => {
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer 32|ZNbYuyp2c7NKlAdrmxqyN5hD5n8kes9c8VIAfUOq'
  }
  
  return http().post('/auth/register', data, {
    headers: headers
  });
};

export const signIn = async data => {
  return http().post('/auth/login', data);
};

export const ocrProcessing = async data => {
  return http().get('/ocr-proccessing?source=' + 'web' + '&imageUrl=' + data);
};

export const fetchUser = async () => {
  return http().get('/users/authenticated');
};

export const verifyAccount = async () => {
  return http().patch('/auth/verify-account');
};

export const resetPassword = async data => {
  return http().post(`/auth/reset-password`, data);
};

export const updatePassword = async data => {
  return http().post(`/users/change-password`, data);
};

export const updateProfile = async data => {
  return http().put(`/profile`, data);
};

export const uploadPhoto = async data => {

  const config = {
    headers: {
        'content-type': 'multipart/form-data'
    }
}
  return http().post(`/upload`, data);
};

export const getCompanyUsers = async () => {
  return http().get(`/users`);
};

export const getConfig = async () => {
  return http().get(`/config`);
};

export const assignUserRole = async (id, roleId) => {
  return http().put(`/users/${id}/roles/${roleId}`);
};

export const getCompanyPermissions = async () => {
  return http().get(`/users/company/permissions`);
};

export const getCompanyUserPermissions = async userId => {
  return http().get(`/users/${userId}/permissions`);
};

export const assignTempPermission = async (id, data) => {
  return http().put(`/users/${id}/assign-permissions`, data);
};

export const removeTempPermission = async (id, data) => {
  return http().put(`/users/${id}/remove-permissions`, data);
};

const UserService = {
  signUp,
  signIn,
  ocrProcessing,
  fetchUser,
  verifyAccount,
  resetPassword,
  updatePassword,
  updateProfile,
  uploadPhoto,
  getCompanyUsers,
  getConfig,
  assignUserRole,
  getCompanyPermissions,
  getCompanyUserPermissions,
  assignTempPermission,
  removeTempPermission,
};

export default UserService;
