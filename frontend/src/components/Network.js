import React from 'react';
import { Link } from 'react-router-dom';
import { connections } from '../data/example';

const Network = () => {
  return (
    <div className="container mx-auto p-6 bg-gray-900 text-white min-h-screen">
      <h2 className="text-4xl font-bold mb-8 text-center text-[#38b2ac]">My Network</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {connections.map(connection => (
          <div key={connection.id} className="bg-gray-800 p-6 rounded-3xl shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105">
            <Link to={`/profile/${connection.id}`} className="flex flex-col items-center">
              <img
                src={connection.image}
                alt={connection.name}
                className="w-32 h-32 object-cover rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold">{connection.name}</h3>
              <p className="text-[#38b2ac]">{connection.title}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Network;
