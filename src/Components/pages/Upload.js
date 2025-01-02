import React, { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // import styles
import { FaTrashAlt, FaImage, FaCalendarAlt, FaPlus, FaEdit } from 'react-icons/fa';
 
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
 
  // Handle News edit
  const handleNewsEdit = (e) => {
    e.preventDefault();
 
    if (!newsTitle || !newsCategory || !newsContent) {
      alert('Please fill all the news details');
      return;
    }
 
    const updatedNews = JSON.parse(localStorage.getItem('news')).map((newsItem) => {
      if (newsItem.id === selectedNews.id) {
        return {
          ...newsItem,
          title: newsTitle,
          category: newsCategory,
          content: newsContent,
        };
      }
      return newsItem;
    });
 
    localStorage.setItem('news', JSON.stringify(updatedNews));
    setNewsTitle('');
    setNewsCategory('');
    setNewsContent('');
    setSelectedNews(null);
    alert('News updated successfully');
  };
 
  // Handle News delete
  const handleNewsDelete = (newsId) => {
    const updatedNews = JSON.parse(localStorage.getItem('news')).filter((newsItem) => newsItem.id !== newsId);
    localStorage.setItem('news', JSON.stringify(updatedNews));
    setSelectedNews(null);
    setNewsTitle('');
    setNewsCategory('');
    setNewsContent('');
    alert('News deleted successfully');
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
              <h4 className="text-lg font-medium">Events List</h4>
              <div className="space-y-1">
                {events.map((eventItem) => (
                  <div key={eventItem.id} className="flex items-center justify-between p-2 bg- rounded-md shadow-md">
                    <div onClick={() => handleSelectEvent(eventItem.id)} className="flex flex-col cursor-pointer">
                      <h5 className="text-sm">{eventItem.name}</h5>
                    </div>
                    <button onClick={() => removeEvent(eventItem.id)} className="text-red-500">
                      <FaTrashAlt />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
 
          {/* List News */}
          {selectedPage === 'News' && (
            <div className="space-y-2 mt-6">
              <h4 className="text-lg font-medium">News List</h4>
              <div className="space-y-1">
                {JSON.parse(localStorage.getItem('news'))?.map((newsItem) => (
                  <div key={newsItem.id} className="flex items-center justify-between p-2 bg- rounded-md shadow-md">
                    <div onClick={() => handleSelectNews(newsItem.id)} className="flex flex-col cursor-pointer">
                      <h5 className="text-sm">{newsItem.title}</h5>
                    </div>
                    <button onClick={() => handleNewsDelete(newsItem.id)} className="text-red-500">
                      <FaTrashAlt />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
 
      {/* Main Content */}
      <div className="w-3/4 p-8">
        {/* Event Form */}
        {selectedPage === 'Events' && (
          <div className="w-full bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Add/Edit Event</h3>
            <form onSubmit={handleEventSubmit}>
              <div className="space-y-4">
                <input
                  type="text"
                  value={eventName}
                  onChange={(e) => setEventName(e.target.value)}
                  placeholder="Event Name"
                  className="w-full p-3 rounded-md border border-gray-300"
                />
                <textarea
                  value={eventDescription}
                  onChange={(e) => setEventDescription(e.target.value)}
                  placeholder="Event Description"
                  className="w-full p-3 rounded-md border border-gray-300"
                />
                <input
                  type="date"
                  value={eventDate}
                  onChange={(e) => setEventDate(e.target.value)}
                  className="w-full p-3 rounded-md border border-gray-300"
                />
                <div className="flex items-center space-x-4">
                  <label className="flex items-center cursor-pointer">
                    <FaImage className="mr-2" />
                    <input
                      type="file"
                      onChange={handleFileChange}
                      accept="image/*"
                      multiple
                      className="hidden"
                    />
                    Add Images
                  </label>
                  {selectedFiles.length > 0 && (
                    <button type="button" onClick={cancelFileSelection} className="text-red-500">
                      Cancel Images
                    </button>
                  )}
                </div>
                <div className="flex items-center flex-wrap gap-4 mt-4">
                  {selectedFiles.map((file, index) => (
                    <div key={index} className="relative">
                      <img src={file.preview} alt="Preview" className="w-20 h-20 object-cover rounded-md" />
                      <button
                        onClick={() => removeImage(selectedEvent?.id || null, index)}
                        className="absolute top-0 right-0 text-red-500"
                      >
                        <FaTrashAlt />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
              <button type="submit" className="mt-4 bg-orange-600 text-white px-6 py-2 rounded-md">
                {selectedEvent ? 'Update Event' : 'Submit Event'}
              </button>
            </form>
          </div>
        )}
 
        {/* News Form */}
        {selectedPage === 'News' && (
          <div className="w-full bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Add/Edit News</h3>
            <form onSubmit={selectedNews ? handleNewsEdit : handleNewsSubmit}>
              <div className="space-y-4">
                <input
                  type="text"
                  value={newsTitle}
                  onChange={(e) => setNewsTitle(e.target.value)}
                  placeholder="News Title"
                  className="w-full p-3 rounded-md border border-gray-300"
                />
                <input
                  type="text"
                  value={newsCategory}
                  onChange={(e) => setNewsCategory(e.target.value)}
                  placeholder="Category"
                  className="w-full p-3 rounded-md border border-gray-300"
                />
                <ReactQuill
                  value={newsContent}
                  onChange={setNewsContent}
                  modules={modules}
                  className="w-full border border-gray-300 rounded-md"
                />
              </div>
              <button type="submit" className="mt-4 bg-orange-600 text-white px-6 py-2 rounded-md">
                {selectedNews ? 'Update News' : 'Submit News'}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
 
export default Upload;