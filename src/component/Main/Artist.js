import React from "react";
import { Link } from "react-router-dom";
import dhanda from "../images/dhanda.jpg";
import sidhu from "../images/sidhu.jpg";
import Shubh from "../images/shubh.jpg";
import mcsquare from "../images/square.jpg";

const Artist = () => {
  const singers = [
    { id: 1, name: "Shubh", imageUrl: Shubh },
    { id: 2, name: "Dhanda Nyoliwala", imageUrl: dhanda },
    { id: 3, name: "Sidhu Moosewala", imageUrl: sidhu },
    { id: 4, name: "Mc Square", imageUrl: mcsquare },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-gray-800 text-white text-center py-4">
        <h1 className="text-2xl font-semibold">Artist Gallery</h1>
      </header>
      <div className="container mx-auto py-8">
        <div className="flex flex-wrap justify-center mt-20 mb-20">
          {singers.map((singer) => (
            <Link key={singer.id} to={`/artist${singer.id}`}>
              <div className="flex items-center justify-center flex-col rounded-lg p-4 m-4 bg-white shadow-md hover:shadow-lg">
                <img
                  src={singer.imageUrl}
                  alt={singer.name}
                  className="w-24 h-24 rounded-full"
                />
                <h2 className="mt-2 text-lg font-semibold text-gray-800">
                  {singer.name}
                </h2>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <footer className="bg-gray-800 text-white text-center py-4">
        <p>&copy; 2024 Artist Gallery. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Artist;
