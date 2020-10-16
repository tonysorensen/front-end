// Import Dependencies
import React, { useEffect, useState } from 'react';

// Import Components
import ListingCard from './ListingCard';

// Dummy temp data
const dummyData = [
  {
    id: 0,
    title: "Spacious Water View Comfy Pike Place Flat Sleeps 5",
    type: "Entire apartment",
    location: "Pike Place Market",
    guests: 5,
    bedrooms: 1,
    beds: 2,
    baths: 1,
    amenities: ["Wifi", "Kitchen", "Washer"],
    price: 167,
    salePrice: 143,
    featuredImg: "https://images.unsplash.com/photo-1540518614846-7eded433c457?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1339&q=80"
  },
  {
    id: 1,
    title: "My TALL, 5-level super-funky artist's loft",
    type: "Entire loft",
    location: "Minor",
    guests: 6,
    bedrooms: 3,
    beds: 6,
    baths: 2.5,
    amenities: ["Wifi", "Kitchen", "Free Parking", "Washer"],
    price: 179,
    salePrice: 0,
    featuredImg: "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
  },
  {
    id: 2,
    title: "Private 2 bdrm Apartment",
    type: "Entire apartment",
    location: "Lake Forest Park",
    guests: 5,
    bedrooms: 2,
    beds: 2,
    baths: 1,
    amenities: ["Wifi", "Kitchen", "Free Parking", "Washer"],
    price: 109,
    salePrice: 0,
    featuredImg: "https://images.unsplash.com/flagged/photo-1573168710865-2e4c680d921a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
  }
]

export default function Listings() {

  // Setup the state that will get the listings
  const [ listings, setListings ] = useState([]);

  // Function used to gather the listings whenever component loads
  useEffect(() => {
    setListings(dummyData);
  }, []);

  return (
    <div id="listings">
      <h3 className="heading">Listings</h3>

      {listings.length > 0 && listings.map((listing, index) => {
        return <ListingCard listing={listing} key={index} />
      })}

      {listings.length <= 0 && "No Listings Found"}
    </div>
  )
}
