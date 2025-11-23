import React from 'react';
import { Loader2 } from 'lucide-react';
import { LANGUAGES } from '../utils/constants';

const PromptInput = ({ 
  darkMode, 
  prompt, 
  setPrompt, 
  language, 
  setLanguage, 
  loading, 
  onGenerate 
}) => {
  const cardClass = darkMode ? 'bg-gray-800' : 'bg-white';
  const inputClass = darkMode ? 'bg-gray-700 text-gray-100 border-gray-600' : 'bg-white text-gray-900 border-gray-300';

  return (
    <div className={`${cardClass} rounded-xl p-6 shadow-lg`}>
      <h2 className="text-lg font-semibold mb-4">Enter Your Prompt</h2>
      
      <div className="mb-4">
        <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          Language
        </label>
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className={`w-full px-4 py-2 rounded-lg border ${inputClass} focus:outline-none focus:ring-2 focus:ring-blue-500`}
        >
          <option value={LANGUAGES.PYTHON}>Python</option>
          <option value={LANGUAGES.JAVASCRIPT}>JavaScript</option>
          <option value={LANGUAGES.C}>C</option>
        </select>
      </div>

      <div className="mb-4">
        <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          Prompt
        </label>
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="e.g., Write a function to reverse a string"
          className={`w-full px-4 py-3 rounded-lg border ${inputClass} focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none`}
          rows="6"
          onKeyDown={(e) => {
            if (e.key === 'Enter' && e.ctrlKey) {
              onGenerate();
            }
          }}
        />
      </div>

      <button
        onClick={onGenerate}
        disabled={loading || !prompt.trim()}
        className={`w-full py-3 rounded-lg font-semibold transition-all ${
          loading || !prompt.trim()
            ? 'bg-gray-600 cursor-not-allowed'
            : 'bg-blue-600 hover:bg-blue-700'
        } text-white flex items-center justify-center gap-2`}
      >
        {loading ? (
          <>
            <Loader2 size={20} className="animate-spin" />
            Generating...
          </>
        ) : (
          'Generate Code (Ctrl+Enter)'
        )}
      </button>
    </div>
  );
};

export default PromptInput;