import React, { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // import styles
import { FaTrashAlt, FaImage, FaCalendarAlt, FaPlus } from 'react-icons/fa';
 
const Upload = () => {
  const [selectedPage, setSelectedPage] = useState('Events');
 
  // State for Event
  const [eventName, setEventName] = useState('');
  const [eventDescription, setEventDescription] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [events, setEvents] = useState(JSON.parse(localStorage.getItem('events')) || []);
  const [notification, setNotification] = useState(null);
  const [selectedEvent, setSelectedEvent] = useState(null);
 
  // State for News
  const [newsTitle, setNewsTitle] = useState('');
  const [newsCategory, setNewsCategory] = useState('');
  const [newsContent, setNewsContent] = useState('');
  const [selectedNews, setSelectedNews] = useState(null);
 
  const modules = {
    toolbar: [
      [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      ['bold', 'italic', 'underline'],
      [{ 'align': [] }],
      ['link', 'image'],
      [{ 'color': [] }, { 'background': [] }],
      ['blockquote'],
      ['code-block'],
    ],
  };
 
  // Handle file selection for adding new images
  const handleFileChange = (e) => {
    const files = Array.from(e.target.files).map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));
    setSelectedFiles(files);
  };
 
  // Show notifications
  const showNotification = (message, type = 'success') => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 3000);
  };
 
  // Handle event submission
  const handleEventSubmit = async (e) => {
    e.preventDefault();
 
    // Validation
    if (!eventName || !eventDescription || !eventDate) {
      showNotification('Please fill all the event details', 'error');
      return;
    }
 
    setLoading(true);
 
    try {
      // If no event is selected, create a new event
      if (!selectedEvent) {
        const newEvent = {
          id: Date.now(),
          name: eventName,
          description: eventDescription,
          date: eventDate,
          images: selectedFiles.map((file) => file.preview),
          imageCount: selectedFiles.length,
          uploadedAt: Date.now(),
        };
 
        const updatedEvents = [newEvent, ...events];
        localStorage.setItem('events', JSON.stringify(updatedEvents));
        setEvents(updatedEvents);
 
        showNotification('Event uploaded successfully');
        clearEventForm();
      } else {
        const updatedEvents = events.map((eventItem) => {
          if (eventItem.id === selectedEvent.id) {
            return {
              ...eventItem,
              name: eventName,
              description: eventDescription,
              date: eventDate,
              images: [...eventItem.images, ...selectedFiles.map((file) => file.preview)],
            };
          }
          return eventItem;
        });
 
        localStorage.setItem('events', JSON.stringify(updatedEvents));
        setEvents(updatedEvents);
 
        showNotification('Event updated successfully');
        setSelectedFiles([]);
        setSelectedEvent(null);
      }
    } catch (error) {
      console.error('Error uploading event:', error);
      showNotification('Error uploading event', 'error');
    } finally {
      setLoading(false);
    }
  };
 
  // Clear event form fields
  const clearEventForm = () => {
    setEventName('');
    setEventDescription('');
    setEventDate('');
    setSelectedFiles([]);
    setSelectedEvent(null);
  };
 
  // Remove event
  const removeEvent = (id) => {
    const updatedEvents = events.filter((eventItem) => eventItem.id !== id);
    localStorage.setItem('events', JSON.stringify(updatedEvents));
    setEvents(updatedEvents);
    showNotification('Event deleted successfully');
  };
 
  // Remove image from event
  const removeImage = (eventId, imageIndex) => {
    const updatedEvents = events.map((eventItem) => {
      if (eventItem.id === eventId) {
        const updatedImages = eventItem.images.filter((_, index) => index !== imageIndex);
        return { ...eventItem, images: updatedImages };
      }
      return eventItem;
    });
 
    setEvents(updatedEvents);
    localStorage.setItem('events', JSON.stringify(updatedEvents));
    showNotification('Image removed successfully');
  };
 
  // Cancel file selection
  const cancelFileSelection = () => {
    setSelectedFiles([]);
  };
 
  // Select event from sidebar
  const handleSelectEvent = (eventId) => {
    const eventItem = events.find((eventItem) => eventItem.id === eventId);
    setSelectedEvent(eventItem);
    setEventName(eventItem.name);
    setEventDescription(eventItem.description);
    setEventDate(eventItem.date);
    setSelectedFiles([]); // Reset image selection when viewing event details
  };
 
  // Handle News submission
  const handleNewsSubmit = (e) => {
    e.preventDefault();
    if (!newsTitle || !newsCategory || !newsContent) {
      alert('Please fill all the news details');
      return;
    }
 
    const newNews = {
      id: Date.now(),
      title: newsTitle,
      category: newsCategory,
      content: newsContent,
    };
 
    const existingNews = JSON.parse(localStorage.getItem('news')) || [];
    existingNews.push(newNews);
    localStorage.setItem('news', JSON.stringify(existingNews));
 
    setNewsTitle('');
    setNewsCategory('');
    setNewsContent('');
    alert('News published successfully');
  };
 
  // Handle News selection from sidebar for editing
  const handleSelectNews = (newsId) => {
    const selectedNewsItem = JSON.parse(localStorage.getItem('news')).find((newsItem) => newsItem.id === newsId);
    setSelectedNews(selectedNewsItem);
    setNewsTitle(selectedNewsItem.title);
    setNewsCategory(selectedNewsItem.category);
    setNewsContent(selectedNewsItem.content);
  };
 
  // Fetch events from local storage
  useEffect(() => {
    setEvents(JSON.parse(localStorage.getItem('events')) || []);
  }, []);
 
  return (
    <div className="flex min-h-screen bg-orange-50">
      {/* Sidebar */}
      <div className="w-1/4 bg-orange-700 text-white p-6 border-r border-gray-200 flex flex-col">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-semibold">Content Manager</h2>
        </div>
 
        <div className="flex flex-col space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-3">Actions</h3>
            <div className="space-y-2">
              <button
                onClick={() => setSelectedPage('Events')}
                className="text-white bg-orange-600 hover:bg-orange-700 w-full p-3 rounded-lg shadow-md"
              >
                Manage Events
              </button>
              <button
                onClick={() => setSelectedPage('News')}
                className="text-white bg-orange-600 hover:bg-orange-700 w-full p-3 rounded-lg shadow-md"
              >
                Manage News
              </button>
            </div>
          </div>
 
          {/* List Events */}
          {selectedPage === 'Events' && events.length > 0 && (
            <div className="space-y-2 mt-6">
              <h3 className="text-xl font-semibold mb-3">Events</h3>
              <ul className="space-y-2">
                {events.map((eventItem) => (
                  <li key={eventItem.id} className="flex justify-between items-center text-sm">
                    <button
                      onClick={() => handleSelectEvent(eventItem.id)}
                      className="text-white bg-orange-500 hover:bg-orange-600 py-2 px-4 rounded-lg"
                    >
                      {eventItem.name}
                    </button>
                    <div className="flex space-x-2">
                      <button
                        onClick={() => removeEvent(eventItem.id)}
                        className="text-white bg-red-600 hover:bg-red-700 p-2 rounded-lg"
                      >
                        <FaTrashAlt />
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {/* List News */}
          {selectedPage === 'News' && JSON.parse(localStorage.getItem('news'))?.length > 0 && (
            <div className="space-y-2 mt-6">
              <h3 className="text-xl font-semibold mb-3">News</h3>
              <ul className="space-y-2">
                {JSON.parse(localStorage.getItem('news')).map((newsItem) => (
                  <li key={newsItem.id} className="flex justify-between items-center text-sm">
                    <button
                      onClick={() => handleSelectNews(newsItem.id)}
                      className="text-white bg-blue-500 hover:bg-blue-600 py-2 px-4 rounded-lg"
                    >
                      {newsItem.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
 
      {/* Main content */}
      <div className="w-3/4 p-6">
        <h2 className="text-2xl font-semibold mb-8">{selectedPage === 'Events' ? 'Manage Event' : 'Manage News'}</h2>
 
        {/* Event Form */}
        {selectedPage === 'Events' && (
          <form onSubmit={handleEventSubmit} className="space-y-6">
            <div>
              <label className="block text-lg">Event Name</label>
              <input
                type="text"
                value={eventName}
                onChange={(e) => setEventName(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg"
                placeholder="Enter event name"
              />
            </div>
 
            <div>
              <label className="block text-lg">Event Description</label>
              <ReactQuill
                value={eventDescription}
                onChange={setEventDescription}
                modules={modules}
                className="w-full"
                placeholder="Enter event description"
              />
            </div>
 
            <div>
              <label className="block text-lg">Event Date</label>
              <input
                type="date"
                value={eventDate}
                onChange={(e) => setEventDate(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg"
              />
            </div>
 
            <div>
              <label className="block text-lg">Upload Event Images</label>
              <input
                type="file"
                onChange={handleFileChange}
                multiple
                className="w-full p-3 border border-gray-300 rounded-lg"
              />
              {selectedFiles.length > 0 && (
                <div className="mt-2 flex space-x-4">
                  {selectedFiles.map((file, index) => (
                    <div key={index} className="relative">
                      <img
                        src={file.preview}
                        alt="Event Image"
                        className="w-20 h-20 object-cover rounded-lg"
                      />
                      <button
                        type="button"
                        onClick={() => cancelFileSelection(index)}
                        className="absolute top-0 right-0 bg-red-600 text-white p-1 rounded-full"
                      >
                        X
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
 
            <div className="mt-4">
              <button
                type="submit"
                className={`py-2 px-6 bg-blue-600 text-white rounded-lg ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                disabled={loading}
              >
                {loading ? 'Loading...' : selectedEvent ? 'Update Event' : 'Add Event'}
              </button>
            </div>
          </form>
        )}
 
        {/* News Form */}
        {selectedPage === 'News' && (
          <form onSubmit={handleNewsSubmit} className="space-y-6">
            <div>
              <label className="block text-lg">News Title</label>
              <input
                type="text"
                value={newsTitle}
                onChange={(e) => setNewsTitle(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg"
                placeholder="Enter news title"
              />
            </div>
 
            <div>
              <label className="block text-lg">Category</label>
              <input
                type="text"
                value={newsCategory}
                onChange={(e) => setNewsCategory(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg"
                placeholder="Enter category"
              />
            </div>
 
            <div>
              <label className="block text-lg">News Content</label>
              <ReactQuill
                value={newsContent}
                onChange={setNewsContent}
                modules={modules}
                className="w-full"
                placeholder="Enter news content"
              />
            </div>
 
            <div className="mt-4">
              <button
                type="submit"
                className={`py-2 px-6 bg-green-600 text-white rounded-lg ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                disabled={loading}
              >
                {loading ? 'Loading...' : 'Publish News'}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
 
export default Upload;