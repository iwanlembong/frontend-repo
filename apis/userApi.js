
import axios from 'axios';

const API_URL = 'http://localhost:3009'; // Replace with your actual API URL

export const fetchUserData = async (userId) => {
  try {
    const response = await axios.post(
      `${API_URL}/user/fetch-user-data`, // Send POST request to `/users` endpoint
      { uid: userId }          // Send `userId` in the request body
    );
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to fetch user data');
  }
};

export const getUserData = async () => {
  const response = await fetch("/api/user");  // Replace with the actual endpoint
  return response.json();
};