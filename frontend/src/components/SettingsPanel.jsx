import React from 'react';

const SettingsPanel = ({ darkMode, fontSize, setFontSize, lineHeight, setLineHeight }) => {
  return (
    <div className={`border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'} p-4`}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Font Size: {fontSize}px
          </label>
          <input
            type="range"
            min="10"
            max="20"
            value={fontSize}
            onChange={(e) => setFontSize(Number(e.target.value))}
            className="w-full"
          />
        </div>
        <div>
          <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Line Height: {lineHeight}
          </label>
          <input
            type="range"
            min="1.2"
            max="2"
            step="0.1"
            value={lineHeight}
            onChange={(e) => setLineHeight(Number(e.target.value))}
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default SettingsPanel;