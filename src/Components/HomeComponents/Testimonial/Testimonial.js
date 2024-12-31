import React from 'react';
 
const Testimonial = () => {
  const courses = [
    { name: 'Testimonial', description: 'Basic education for young learners.' },
    { name: 'Testimonial ', description: 'Education for middle school students.' },
   
  ];
 
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Testimonials</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {courses.map((course, index) => (
          <div
            key={index}
            className="relative bg-green text-gray-800 p-6 rounded-lg shadow-md overflow-hidden group"
          >
            {/* Expanding Circle */}
            <div className="absolute h-[5em] w-[5em] -top-[2.5em] -right-[2.5em] rounded-full bg-orange-500 group-hover:scale-[800%] duration-500 z-[-1]" />
           
            {/* Course Name */}
            <h2 className="text-2xl font-semibold mb-4 group-hover:text-black duration-500 z-10">
              {course.name}
            </h2>
           
            {/* Course Description */}
            <p className="group-hover:text-black duration-500 z-10">{course.description}</p>
           
           
          </div>
        ))}
      </div>
    </div>
  );
};
 
export default Testimonial;