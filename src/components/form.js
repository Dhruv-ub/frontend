import React, { useState, useEffect } from "react";
import { createNewListing, updateListingById } from "../service/api";

const ListingForm = ({ selectedListing, refreshListings, resetSelection }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    seller: "",
    rating: 1,
  });

  useEffect(() => {
    if (selectedListing) setFormData(selectedListing);
  }, [selectedListing]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (selectedListing?._id) {
        await updateListingById(selectedListing._id, formData);
      } else {
        await createNewListing(formData);
      }
      setFormData({ title: "", description: "", seller: "", rating: 1 });
      refreshListings();
      resetSelection();
    } catch (error) {
      alert("Error in submission.");
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>{selectedListing ? "Update Listing" : "Add New Listing"}</h2>
      <input
        type="text"
        placeholder="Title"
        value={formData.title}
        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        required
      />
      <textarea
        placeholder="Description"
        value={formData.description}
        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
        required
      />
      <input
        type="text"
        placeholder="Seller"
        value={formData.seller}
        onChange={(e) => setFormData({ ...formData, seller: e.target.value })}
        required
      />
      <input
        type="number"
        placeholder="Rating (1-5)"
        value={formData.rating}
        onChange={(e) => setFormData({ ...formData, rating: +e.target.value })}
        min="1"
        max="5"
        required
      />
      <button type="submit">{selectedListing ? "Update" : "Create"}</button>
    </form>
  );
};

export default ListingForm;
