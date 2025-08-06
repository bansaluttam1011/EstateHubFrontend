import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../api";

interface Property {
  _id: string;
  title: string;
  description: string;
  location: string;
  price: number;
  images: string[];
}

const AllProperties = () => {
  const [properties, setProperties] = useState<Property[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await API.get("/properties");
        setProperties(res.data);
      } catch (err) {
        console.error("Error fetching properties:", err);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">All Properties</h2>
      {properties.length === 0 ? (
        <p>No properties found</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((property) => (
            <div key={property._id} className="border p-4 rounded-md shadow hover:shadow-lg transition duration-200">
              <img src={property.images?.[0]} alt={property.title} className="w-full h-48 object-cover rounded-md mb-2" />
              <h3 className="text-xl font-semibold">{property.title}</h3>
              <p className="text-gray-600">{property.location}</p>
              <p className="text-blue-600 font-bold mt-1">₹{property.price.toLocaleString()}</p>
              <Link to={`/property/${property._id}`} className="inline-block mt-3 text-blue-500 hover:underline">
                View Details
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllProperties;
