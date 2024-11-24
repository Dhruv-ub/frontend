import React, { useEffect, useState } from "react";
import { getAllListings } from "../service/api";
import ListingItem from "./ListingItem";
import ListingForm from "./form";

const Listings = () => {
  const [listings, setListings] = useState([]);
  const [selectedListing, setSelectedListing] = useState(null);

  const fetchListings = async () => {
    try {
      const { data } = await getAllListings();
      setListings(data);
    } catch (error) {
      alert("Error fetching listings.");
    }
  };

  useEffect(() => {
    fetchListings();
  }, []);

  return (
    <div className="container">
      <h1>Listings Management</h1>
      <ListingForm
        selectedListing={selectedListing}
        refreshListings={fetchListings}
        resetSelection={() => setSelectedListing(null)}
      />
      <div className="listings">
        {listings.length > 0 ? (
          listings.map((listing) => (
            <ListingItem
              key={listing._id}
              listing={listing}
              refreshListings={fetchListings}
              setSelectedListing={setSelectedListing}
            />
          ))
        ) : (
          <p>No listings available. Add a new one!</p>
        )}
      </div>
    </div>
  );
};

export default Listings;
