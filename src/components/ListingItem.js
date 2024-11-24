import React from "react";
import { deleteListingById } from "../service/api";

const ListingItem = ({ listing, refreshListings, setSelectedListing }) => {
  const handleDelete = async () => {
    try {
      await deleteListingById(listing._id);
      refreshListings();
    } catch (error) {
      alert("Error deleting the listing.");
    }
  };

  return (
    <div className="listing-item">
      <div>
        <h3>{listing.title}</h3>
        <p>{listing.description}</p>
        <p>Seller: {listing.seller}</p>
        <p>Rating: {listing.rating}</p>
      </div>
      <div className="actions">
        <button className="edit-btn" onClick={() => setSelectedListing(listing)}>
          Edit
        </button>
        <button className="delete-btn" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default ListingItem;
