import React, { useState, useEffect } from 'react';
import { Image as ImageIcon } from 'lucide-react';

function Events() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Get events from localStorage on initial load
    const loadEvents = () => {
      setLoading(true);
      const storedEvents = localStorage.getItem('events');
      const parsedEvents = storedEvents ? JSON.parse(storedEvents) : [];
      setEvents(parsedEvents.reverse()); // Show newest events first
      setLoading(false);
    };

    loadEvents();
    // Add event listener for storage changes
    window.addEventListener('storage', loadEvents);
    return () => window.removeEventListener('storage', loadEvents);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Company Events</h1>
        
        {events.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-lg shadow-sm">
            <ImageIcon className="mx-auto h-12 w-12 text-gray-400 mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No events yet</h3>
            <p className="text-gray-500">Check back later for updates on our latest events.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-8">
            {events.map((event) => (
              <div
                key={event.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 mb-2">{event.name}</h2>
                      <p className="text-sm text-gray-500">{event.date}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">{event.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {event.images.map((image, index) => (
                      <div key={index} className="relative group aspect-w-16 aspect-h-9">
                        <img
                          src={image}
                          alt={`${event.name} - Image ${index + 1}`}
                          className="w-full h-64 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Events;