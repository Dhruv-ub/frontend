// src/service/api.js

import axios from 'axios';

const API_URL = 'https://backend-1-vo4d.onrender.com/listing';

// Get all listings
export const getAllListings = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching listings', error);
    return [];
  }
};

// Create a new listing
export const createNewListing = async (listing) => {
  try {
    const response = await axios.post(API_URL, listing);
    return response.data;
  } catch (error) {
    console.error('Error creating listing', error);
    return null;
  }
};

// Update a listing by id
export const updateListingById = async (id, updatedListing) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, updatedListing);
    return response.data;
  } catch (error) {
    console.error('Error updating listing', error);
    return null;
  }
};

// Delete a listing by id
export const deleteListingById = async (id) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
    return id;
  } catch (error) {
    console.error('Error deleting listing', error);
    return null;
  }
};
