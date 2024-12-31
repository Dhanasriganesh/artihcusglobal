import React from 'react';
import ckreddy from '../../images/ck-reddy.jpg';
import syamareddy from '../../images/syam-sundar-Reddy-.jpg';
import narareddy from '../../images/Muralidhar Reddy_.jpg';
import harireddy from '../../images/Harinath Reddy-.jpg';
import surendra from '../../images/surendra Gondipalli-.jpg';
import bhanureddy from '../../images/bhanu.jpg';
import sudhakar from '../../images/sudhakar.jpg';
import venkatkumar from '../../images/venkat-tangirala.jpg';
import kalyan from '../../images/kalyan-nese.jpg';
 
 
const ProfileCard = ({ image, name, title, onClick }) => {
  return (
    <div className="flex flex-col items-center text-center">
      {/* Profile Image Container */}
      <div className="w-32 h-32 mb-4 rounded-full overflow-hidden bg-gray-100">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>
      {/* Name and Title */}
      <h3 className="text-sm font-semibold mb-1">{name}</h3>
      <p className="text-xs text-gray-900 mb-4">{title}</p>
      {/* View More Button */}
      <button
        onClick={onClick}
        className="bg-orange-500 text-white px-3 py-2 rounded-md hover:bg-orange-600 transition-colors duration-300"
      >
        View More
      </button>
    </div>
  );
};
 
const Leadership = () => {
  const leadershipTeam = [
    {
      name: "C.K REDDY",
      title: "Founder CEO, and MD",
      image: ckreddy, // Replace with actual image path
    },
    {
      name: "Syama Sundara Reddy",
      title: "Director and COO",
      image: syamareddy, // Replace with actual image path",
    },
    {
      name: "Nara Muralidhar Reddy",
      title: "Founder & Director",
      image:  narareddy, // Replace with actual image path",
    },
    {
      name: "Hari Reddy Andluru",
      title: "Head of SAP Competency",
      image: harireddy, // Replace with actual image path",
    },
    {
      name: "Surendra Gondipalli",
      title: "President, Artihcus Global inc.",
      image: surendra, // Replace with actual image path",
    },
  ];
 
  const advisoryBoard = [
    {
      name: "Bhanu Prakash Reddy",
      title: "Advisory Board Member",
      image: bhanureddy, // Replace with actual image path",
    },
    {
      name: "Sudhakar Amirapu",
      title: "Advisory Board Member",
      image: sudhakar, // Replace with actual image path",
    },
    {
      name: "Venkat Kumar Tangirala",
      title: "Advisory Board Member",
      image: venkatkumar, // Replace with actual image path",
    },
    {
      name: "Kalyan Nese",
      title: "Advisory Board Member",
      image:   kalyan, // Replace with actual image path",
    },
  ];
 
  const handleViewMore = (name) => {
    console.log(`View more clicked for ${name}`);
  };
 
  return (
    <div className="container mx-auto px-6 py-16 max-w-screen-xl">
      {/* Flex Container for Leadership and Advisory Board */}
      <div className="flex flex-col lg:flex-row justify-between gap-12">
        {/* Leadership Section */}
        <div className="flex-1 max-w-[48%]">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold mb-2">Leadership</h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
            {leadershipTeam.map((leader, index) => (
              <ProfileCard
                key={index}
                {...leader}
                onClick={() => handleViewMore(leader.name)}
              />
            ))}
          </div>
        </div>
 
        {/* Advisory Board Section */}
        <div className="flex-1 max-w-[48%]">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold mb-2">Advisory Board</h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
            {advisoryBoard.map((member, index) => (
              <ProfileCard
                key={index}
                {...member}
                onClick={() => handleViewMore(member.name)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
 
export default Leadership;