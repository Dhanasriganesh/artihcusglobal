import React, { useEffect, useState } from 'react';
 
function Newscenter() {
  const [news, setNews] = useState([]);
 
  // Load news data from localStorage
  useEffect(() => {
    const storedNews = JSON.parse(localStorage.getItem('news')) || [];
    setNews(storedNews);
  }, []);
 
  return (
    <div className="p-8 bg-white">
      <div className="max-w-4xl mx-auto bg-white shadow-lg p-6 rounded-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">News</h2>
        {news.length === 0 ? (
          <p className="text-gray-600">No news available.</p>
        ) : (
          news.map((newsItem) => (
            <div key={newsItem.id} className="border-b border-gray-300 pb-6 mb-6">
              <h3 className="text-xl font-semibold text-gray-800">{newsItem.title}</h3>
              <p className="text-gray-600">{newsItem.category}</p>
              <div
                className="mt-4 text-gray-800"
                dangerouslySetInnerHTML={{ __html: newsItem.content }}
              />
            </div>
          ))
        )}
      </div>
    </div>
  );
}
 
export default Newscenter;