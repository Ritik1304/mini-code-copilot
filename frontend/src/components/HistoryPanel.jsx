import React from 'react';
import { Clock, Search, Star, Trash2 } from 'lucide-react';

const HistoryPanel = ({ 
  darkMode, 
  history, 
  searchQuery, 
  setSearchQuery,
  onLoadHistory,
  onToggleFavorite,
  onDeleteHistory,
  filteredHistory 
}) => {
  const cardClass = darkMode ? 'bg-gray-800' : 'bg-white';
  const inputClass = darkMode ? 'bg-gray-700 text-gray-100 border-gray-600' : 'bg-white text-gray-900 border-gray-300';
  const hoverClass = darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100';

  return (
    <div className={`${cardClass} rounded-xl p-6 shadow-lg sticky top-24`}>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold flex items-center gap-2">
          <Clock size={20} />
          History
        </h2>
        <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          {history.length} items
        </span>
      </div>

      <div className="mb-4 relative">
        <Search size={16} className={`absolute left-3 top-3 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search history..."
          className={`w-full pl-10 pr-4 py-2 rounded-lg border ${inputClass} focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm`}
        />
      </div>

      <div className="space-y-2 max-h-[600px] overflow-y-auto">
        {filteredHistory.length === 0 ? (
          <p className={`text-sm ${darkMode ? 'text-gray-500' : 'text-gray-400'} text-center py-8`}>
            {searchQuery ? 'No matching history' : 'No history yet'}
          </p>
        ) : (
          filteredHistory.map((item) => (
            <div
              key={item.id}
              className={`p-3 rounded-lg border ${darkMode ? 'border-gray-700 hover:bg-gray-750' : 'border-gray-200 hover:bg-gray-50'} cursor-pointer transition-colors group`}
              onClick={() => onLoadHistory(item)}
            >
              <div className="flex items-start justify-between mb-2">
                <span className={`text-xs px-2 py-1 rounded ${darkMode ? 'bg-blue-900 text-blue-200' : 'bg-blue-100 text-blue-800'}`}>
                  {item.language}
                </span>
                <div className="flex gap-1">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onToggleFavorite(item.id);
                    }}
                    className={`p-1 rounded ${hoverClass}`}
                  >
                    <Star
                      size={14}
                      className={item.favorite ? 'fill-yellow-500 text-yellow-500' : ''}
                    />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onDeleteHistory(item.id);
                    }}
                    className={`p-1 rounded ${hoverClass} text-red-500`}
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              </div>
              <p className="text-sm font-medium line-clamp-2 mb-1">{item.prompt}</p>
              <p className={`text-xs ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
                {new Date(item.timestamp).toLocaleString()}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default HistoryPanel;