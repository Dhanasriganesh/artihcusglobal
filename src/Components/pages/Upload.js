import React, { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
 
const Upload = () => {
  const [selectedPage, setSelectedPage] = useState('Events');
  const [formData, setFormData] = useState({
    id: null,
    name: '',
    description: '',
    date: '',
    images: [],
    title: '',
    category: '',
    content: '',
  });
  const [dataStore, setDataStore] = useState({
    events: JSON.parse(localStorage.getItem('events')) || [],
    news: JSON.parse(localStorage.getItem('news')) || [],
    blogs: JSON.parse(localStorage.getItem('blogs')) || [],
  });
  const [notification, setNotification] = useState(null);
 
  const modules = {
    toolbar: [
      [{ header: '1' }, { header: '2' }, { font: [] }],
      [{ list: 'ordered' }, { list: 'bullet' }],
      ['bold', 'italic', 'underline'],
      [{ align: [] }],
      ['link', 'image'],
      [{ color: [] }, { background: [] }],
      ['blockquote', 'code-block'],
    ],
  };
 
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
 
  const handleImageUpload = (e) => {
    e.preventDefault();
    const files = e.target.files;
    if (files) {
      const imageUrls = Array.from(files).map((file) => URL.createObjectURL(file));
      setFormData((prev) => ({
        ...prev,
        images: [...prev.images, ...imageUrls],
      }));
    }
  };
 
  const handleImageRemove = (e, index) => {
    e.preventDefault();
    e.stopPropagation();
    setFormData((prev) => {
      const updatedImages = prev.images.filter((_, i) => i !== index);
      return { ...prev, images: updatedImages };
    });
  };
 
  const handleSubmit = (e) => {
    e.preventDefault();
    const storeKey = selectedPage.toLowerCase();
    const requiredFields =
      storeKey === 'events'
        ? ['name', 'description', 'date']
        : ['title', 'category', 'content', 'date'];
 
    const isValid = requiredFields.every((field) => formData[field]);
    if (!isValid) {
      setNotification({ message: 'Please fill all required fields', type: 'error' });
      setTimeout(() => setNotification(null), 3000);
      return;
    }
 
    const parsedDate = new Date(formData.date).toISOString();
    const updatedFormData = { ...formData, date: parsedDate };
 
    const updatedData = formData.id
      ? dataStore[storeKey].map((item) =>
          item.id === formData.id ? { ...item, ...updatedFormData } : item
        )
      : [{ ...updatedFormData, id: Date.now() }, ...dataStore[storeKey]];
 
    setDataStore((prev) => ({ ...prev, [storeKey]: updatedData }));
    localStorage.setItem(storeKey, JSON.stringify(updatedData));
 
    setNotification({
      message: formData.id
        ? `${selectedPage} updated successfully`
        : `${selectedPage} created successfully`,
      type: 'success',
    });
    setTimeout(() => setNotification(null), 3000);
 
    setFormData({
      id: null,
      name: '',
      description: '',
      date: '',
      images: [],
      title: '',
      category: '',
      content: '',
    });
  };
 
  const handleEdit = (id) => {
    const storeKey = selectedPage.toLowerCase();
    const selectedItem = dataStore[storeKey].find((item) => item.id === id);
    setFormData({ ...selectedItem, date: new Date(selectedItem.date).toISOString().split('T')[0] });
  };
 
  const handleDelete = (id) => {
    const storeKey = selectedPage.toLowerCase();
    const updatedData = dataStore[storeKey].filter((item) => item.id !== id);
    setDataStore((prev) => ({ ...prev, [storeKey]: updatedData }));
    localStorage.setItem(storeKey, JSON.stringify(updatedData));
    setNotification({ message: `${selectedPage} deleted successfully`, type: 'success' });
    setTimeout(() => setNotification(null), 3000);
  };
 
  const formatDate = (dateString) => {
    if (!dateString) return 'No date provided';
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const parsedDate = new Date(dateString);
    return isNaN(parsedDate) ? 'Invalid date' : parsedDate.toLocaleDateString(undefined, options);
  };
 
  const renderList = () => {
    const storeKey = selectedPage.toLowerCase();
    return (
      <ul className="space-y-4">
        {dataStore[storeKey].map((item) => (
          <li key={item.id} className="p-4 bg-white rounded-lg shadow">
            <h4 className="font-bold text-lg">{item.title || item.name}</h4>
            <p className="text-sm text-gray-500">{formatDate(item.date)}</p>
            <div
              className="text-sm mt-2"
              dangerouslySetInnerHTML={{ __html: item.content || item.description }}
            />
            <div className="flex space-x-2 mt-4">
              <button
                type="button"
                onClick={() => handleEdit(item.id)}
                className="px-4 py-2 bg-yellow-500 text-white rounded-lg"
              >
                Edit
              </button>
              <button
                type="button"
                onClick={() => handleDelete(item.id)}
                className="px-4 py-2 bg-red-500 text-white rounded-lg"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    );
  };
 
  useEffect(() => {
    setFormData({
      id: null,
      name: '',
      description: '',
      date: '',
      images: [],
      title: '',
      category: '',
      content: '',
    });
  }, [selectedPage]);
 
  return (
    <div className="flex h-screen bg-gray-100">
      <div className="w-64 bg-white shadow-lg">
        <div className="p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-6">Dashboard</h2>
          <nav>
            {['Events', 'News', 'Blogs'].map((page) => (
              <button
                key={page}
                type="button"
                onClick={() => setSelectedPage(page)}
                className={`block w-full p-3 rounded-lg ${selectedPage === page ? 'bg-blue-500 text-white' : ''}`}
              >
                {page}
              </button>
            ))}
          </nav>
        </div>
      </div>
      <div className="flex-1 overflow-auto p-8">
        {notification && (
          <div
            className={`p-4 mb-4 ${
              notification.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
            }`}
          >
            {notification.message}
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-6 mb-8">
          {selectedPage === 'Events' ? (
            <>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg"
                  placeholder="Enter event name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg"
                  placeholder="Enter event description"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Images</label>
                <input type="file" multiple accept="image/*" onChange={handleImageUpload} />
                {formData.images.length > 0 && (
                  <div className="mt-4 flex space-x-2">
                    {formData.images.map((url, index) => (
                      <div key={url} className="relative">
                        <img src={url} alt="uploaded" className="w-20 h-20 rounded-lg" />
                        <button
                          type="button"
                          onClick={(e) => handleImageRemove(e, index)}
                          className="absolute top-0 right-0 bg-red-500 text-white text-xs px-2 rounded-full"
                        >
                          ×
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </>
          ) : (
            <>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg"
                  placeholder="Enter title"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                <input
                  type="text"
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg"
                  placeholder="Enter category"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Content</label>
                <ReactQuill
                  value={formData.content}
                  onChange={(value) => setFormData((prev) => ({ ...prev, content: value }))}
                  modules={modules}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg"
                />
              </div>
            </>
          )}
          <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-lg">
            {formData.id ? 'Update' : 'Create'}
          </button>
        </form>
        {renderList()}
      </div>
    </div>
  );
};
 
export default Upload;