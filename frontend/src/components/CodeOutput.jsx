import React from 'react';
import { Copy, Check } from 'lucide-react';

const CodeOutput = ({ darkMode, code, copied, onCopy, fontSize, lineHeight }) => {
  const cardClass = darkMode ? 'bg-gray-800' : 'bg-white';
  const hoverClass = darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100';

  if (!code) return null;

  return (
    <div className={`${cardClass} rounded-xl p-6 shadow-lg`}>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">Generated Code</h2>
        <button
          onClick={onCopy}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg ${hoverClass} transition-colors`}
        >
          {copied ? (
            <>
              <Check size={16} className="text-green-500" />
              <span className="text-sm">Copied!</span>
            </>
          ) : (
            <>
              <Copy size={16} />
              <span className="text-sm">Copy</span>
            </>
          )}
        </button>
      </div>
      
      <div className={`rounded-lg overflow-hidden ${darkMode ? 'bg-gray-950' : 'bg-gray-100'}`}>
        <pre className="p-4 overflow-x-auto">
          <code 
            className={`${darkMode ? 'text-gray-100' : 'text-gray-900'}`}
            style={{
              fontSize: `${fontSize}px`,
              lineHeight: lineHeight,
              fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace'
            }}
          >
            {code}
          </code>
        </pre>
      </div>
    </div>
  );
};

export default CodeOutput;