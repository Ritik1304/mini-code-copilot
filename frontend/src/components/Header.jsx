import React from 'react';
import { Moon, Sun, Settings } from 'lucide-react';

const Header = ({ darkMode, setDarkMode, showSettings, setShowSettings }) => {
  const cardClass = darkMode ? 'bg-gray-800' : 'bg-white';
  const hoverClass = darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100';

  return (
    <header className={`${cardClass} border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'} sticky top-0 z-10`}>
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className={`w-10 h-10 ${darkMode ? 'bg-blue-600' : 'bg-blue-500'} rounded-lg flex items-center justify-center`}>
            <span className="text-white font-bold text-xl">{'</>'}</span>
          </div>
          <div>
            <h1 className="text-2xl font-bold">Mini Code Copilot</h1>
            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              AI-powered code generation
            </p>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowSettings(!showSettings)}
            className={`p-2 rounded-lg ${hoverClass} transition-colors`}
            title="Settings"
          >
            <Settings size={20} />
          </button>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`p-2 rounded-lg ${hoverClass} transition-colors`}
            title="Toggle theme"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;