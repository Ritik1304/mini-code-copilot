// import React, { useState, useEffect } from 'react';
// import { Copy, Check, Moon, Sun, Star, Clock, Search, Trash2, Settings, Loader2 } from 'lucide-react';

// // Mock API function
// const mockGenerateCode = async (prompt, language) => {
//   await new Promise(resolve => setTimeout(resolve, 1500));
  
//   const codeSnippets = {
//     python: {
//       'reverse': `def reverse_string(s):\n    """Reverse a string."""\n    return s[::-1]\n\n# Example usage\nresult = reverse_string("hello")\nprint(result)  # Output: olleh`,
//       'fibonacci': `def fibonacci(n):\n    """Generate Fibonacci sequence up to n terms."""\n    fib = [0, 1]\n    for i in range(2, n):\n        fib.append(fib[i-1] + fib[i-2])\n    return fib[:n]\n\n# Example\nprint(fibonacci(10))`,
//       'sort': `def bubble_sort(arr):\n    """Sort array using bubble sort."""\n    n = len(arr)\n    for i in range(n):\n        for j in range(0, n-i-1):\n            if arr[j] > arr[j+1]:\n                arr[j], arr[j+1] = arr[j+1], arr[j]\n    return arr`,
//       'default': `def process_data(data):\n    """Process the input data."""\n    result = []\n    for item in data:\n        if isinstance(item, str):\n            result.append(item.upper())\n        else:\n            result.append(item * 2)\n    return result`
//     },
//     javascript: {
//       'reverse': `function reverseString(str) {\n  // Reverse a string\n  return str.split('').reverse().join('');\n}\n\n// Example usage\nconst result = reverseString("hello");\nconsole.log(result); // Output: olleh`,
//       'fibonacci': `function fibonacci(n) {\n  // Generate Fibonacci sequence\n  const fib = [0, 1];\n  for (let i = 2; i < n; i++) {\n    fib[i] = fib[i - 1] + fib[i - 2];\n  }\n  return fib.slice(0, n);\n}\n\nconsole.log(fibonacci(10));`,
//       'sort': `function bubbleSort(arr) {\n  // Bubble sort implementation\n  const n = arr.length;\n  for (let i = 0; i < n; i++) {\n    for (let j = 0; j < n - i - 1; j++) {\n      if (arr[j] > arr[j + 1]) {\n        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];\n      }\n    }\n  }\n  return arr;\n}`,
//       'default': `function processData(data) {\n  // Process input data\n  return data.map(item => {\n    if (typeof item === 'string') {\n      return item.toUpperCase();\n    }\n    return item * 2;\n  });\n}`
//     },
//     c: {
//       'reverse': `#include <stdio.h>\n#include <string.h>\n\nvoid reverseString(char* str) {\n    int n = strlen(str);\n    for (int i = 0; i < n/2; i++) {\n        char temp = str[i];\n        str[i] = str[n-i-1];\n        str[n-i-1] = temp;\n    }\n}\n\nint main() {\n    char str[] = "hello";\n    reverseString(str);\n    printf("%s\\n", str);\n    return 0;\n}`,
//       'fibonacci': `#include <stdio.h>\n\nvoid fibonacci(int n) {\n    int a = 0, b = 1, next;\n    for (int i = 0; i < n; i++) {\n        printf("%d ", a);\n        next = a + b;\n        a = b;\n        b = next;\n    }\n}\n\nint main() {\n    fibonacci(10);\n    return 0;\n}`,
//       'sort': `#include <stdio.h>\n\nvoid bubbleSort(int arr[], int n) {\n    for (int i = 0; i < n-1; i++) {\n        for (int j = 0; j < n-i-1; j++) {\n            if (arr[j] > arr[j+1]) {\n                int temp = arr[j];\n                arr[j] = arr[j+1];\n                arr[j+1] = temp;\n            }\n        }\n    }\n}`,
//       'default': `#include <stdio.h>\n\nint processNumber(int num) {\n    return num * num;\n}\n\nint main() {\n    int result = processNumber(5);\n    printf("Result: %d\\n", result);\n    return 0;\n}`
//     }
//   };

//   const promptLower = prompt.toLowerCase();
//   let selectedSnippet = 'default';
  
//   if (promptLower.includes('reverse')) selectedSnippet = 'reverse';
//   else if (promptLower.includes('fibonacci') || promptLower.includes('fib')) selectedSnippet = 'fibonacci';
//   else if (promptLower.includes('sort')) selectedSnippet = 'sort';

//   return {
//     code: codeSnippets[language][selectedSnippet] || codeSnippets[language].default
//   };
// };

// function App() {
//   const [prompt, setPrompt] = useState('');
//   const [code, setCode] = useState('');
//   const [language, setLanguage] = useState('python');
//   const [loading, setLoading] = useState(false);
//   const [copied, setCopied] = useState(false);
//   const [darkMode, setDarkMode] = useState(true);
//   const [history, setHistory] = useState([]);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [fontSize, setFontSize] = useState(14);
//   const [lineHeight, setLineHeight] = useState(1.5);
//   const [showSettings, setShowSettings] = useState(false);

//   useEffect(() => {
//     const savedHistory = localStorage.getItem('codeHistory');
//     const savedDarkMode = localStorage.getItem('darkMode');
//     const savedFontSize = localStorage.getItem('fontSize');
//     const savedLineHeight = localStorage.getItem('lineHeight');
    
//     if (savedHistory) setHistory(JSON.parse(savedHistory));
//     if (savedDarkMode) setDarkMode(JSON.parse(savedDarkMode));
//     if (savedFontSize) setFontSize(JSON.parse(savedFontSize));
//     if (savedLineHeight) setLineHeight(JSON.parse(savedLineHeight));
//   }, []);

//   useEffect(() => {
//     localStorage.setItem('codeHistory', JSON.stringify(history));
//   }, [history]);

//   useEffect(() => {
//     localStorage.setItem('darkMode', JSON.stringify(darkMode));
//   }, [darkMode]);

//   useEffect(() => {
//     localStorage.setItem('fontSize', JSON.stringify(fontSize));
//   }, [fontSize]);

//   useEffect(() => {
//     localStorage.setItem('lineHeight', JSON.stringify(lineHeight));
//   }, [lineHeight]);

//   const handleGenerate = async () => {
//     if (!prompt.trim()) return;
    
//     setLoading(true);
//     try {
//       const response = await mockGenerateCode(prompt, language);
//       setCode(response.code);
      
//       const newEntry = {
//         id: Date.now(),
//         prompt,
//         code: response.code,
//         language,
//         timestamp: new Date().toISOString(),
//         favorite: false
//       };
      
//       setHistory(prev => [newEntry, ...prev]);
//     } catch (error) {
//       console.error('Error generating code:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleCopy = () => {
//     navigator.clipboard.writeText(code);
//     setCopied(true);
//     setTimeout(() => setCopied(false), 2000);
//   };

//   const toggleFavorite = (id) => {
//     setHistory(prev => prev.map(item => 
//       item.id === id ? { ...item, favorite: !item.favorite } : item
//     ));
//   };

//   const deleteHistoryItem = (id) => {
//     setHistory(prev => prev.filter(item => item.id !== id));
//   };

//   const loadFromHistory = (item) => {
//     setPrompt(item.prompt);
//     setCode(item.code);
//     setLanguage(item.language);
//   };

//   const filteredHistory = history.filter(item =>
//     item.prompt.toLowerCase().includes(searchQuery.toLowerCase()) ||
//     item.code.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   const bgClass = darkMode ? 'bg-gray-900' : 'bg-gray-50';
//   const textClass = darkMode ? 'text-gray-100' : 'text-gray-900';
//   const cardClass = darkMode ? 'bg-gray-800' : 'bg-white';
//   const inputClass = darkMode ? 'bg-gray-700 text-gray-100 border-gray-600' : 'bg-white text-gray-900 border-gray-300';
//   const hoverClass = darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100';

//   return (
//     <div className={`min-h-screen ${bgClass} ${textClass} transition-colors duration-200`}>
//       {/* Header */}
//       <header className={`${cardClass} border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'} sticky top-0 z-10`}>
//         <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
//           <div className="flex items-center gap-3">
//             <div className={`w-10 h-10 ${darkMode ? 'bg-blue-600' : 'bg-blue-500'} rounded-lg flex items-center justify-center`}>
//               <span className="text-white font-bold text-xl">{'</>'}</span>
//             </div>
//             <div>
//               <h1 className="text-2xl font-bold">Mini Code Copilot</h1>
//               <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>AI-powered code generation</p>
//             </div>
//           </div>
          
//           <div className="flex items-center gap-2">
//             <button
//               onClick={() => setShowSettings(!showSettings)}
//               className={`p-2 rounded-lg ${hoverClass} transition-colors`}
//               title="Settings"
//             >
//               <Settings size={20} />
//             </button>
//             <button
//               onClick={() => setDarkMode(!darkMode)}
//               className={`p-2 rounded-lg ${hoverClass} transition-colors`}
//               title="Toggle theme"
//             >
//               {darkMode ? <Sun size={20} /> : <Moon size={20} />}
//             </button>
//           </div>
//         </div>

//         {/* Settings Panel */}
//         {showSettings && (
//           <div className={`border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'} p-4`}>
//             <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
//               <div>
//                 <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
//                   Font Size: {fontSize}px
//                 </label>
//                 <input
//                   type="range"
//                   min="10"
//                   max="20"
//                   value={fontSize}
//                   onChange={(e) => setFontSize(Number(e.target.value))}
//                   className="w-full"
//                 />
//               </div>
//               <div>
//                 <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
//                   Line Height: {lineHeight}
//                 </label>
//                 <input
//                   type="range"
//                   min="1.2"
//                   max="2"
//                   step="0.1"
//                   value={lineHeight}
//                   onChange={(e) => setLineHeight(Number(e.target.value))}
//                   className="w-full"
//                 />
//               </div>
//             </div>
//           </div>
//         )}
//       </header>

//       {/* Main Content */}
//       <div className="max-w-7xl mx-auto px-4 py-6">
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//           {/* Left Panel - Input */}
//           <div className="lg:col-span-2 space-y-4">
//             <div className={`${cardClass} rounded-xl p-6 shadow-lg`}>
//               <h2 className="text-lg font-semibold mb-4">Enter Your Prompt</h2>
              
//               <div className="mb-4">
//                 <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
//                   Language
//                 </label>
//                 <select
//                   value={language}
//                   onChange={(e) => setLanguage(e.target.value)}
//                   className={`w-full px-4 py-2 rounded-lg border ${inputClass} focus:outline-none focus:ring-2 focus:ring-blue-500`}
//                 >
//                   <option value="python">Python</option>
//                   <option value="javascript">JavaScript</option>
//                   <option value="c">C</option>
//                 </select>
//               </div>

//               <div className="mb-4">
//                 <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
//                   Prompt
//                 </label>
//                 <textarea
//                   value={prompt}
//                   onChange={(e) => setPrompt(e.target.value)}
//                   placeholder="e.g., Write a function to reverse a string"
//                   className={`w-full px-4 py-3 rounded-lg border ${inputClass} focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none`}
//                   rows="6"
//                   onKeyDown={(e) => {
//                     if (e.key === 'Enter' && e.ctrlKey) {
//                       handleGenerate();
//                     }
//                   }}
//                 />
//               </div>

//               <button
//                 onClick={handleGenerate}
//                 disabled={loading || !prompt.trim()}
//                 className={`w-full py-3 rounded-lg font-semibold transition-all ${
//                   loading || !prompt.trim()
//                     ? 'bg-gray-600 cursor-not-allowed'
//                     : 'bg-blue-600 hover:bg-blue-700'
//                 } text-white flex items-center justify-center gap-2`}
//               >
//                 {loading ? (
//                   <>
//                     <Loader2 size={20} className="animate-spin" />
//                     Generating...
//                   </>
//                 ) : (
//                   'Generate Code (Ctrl+Enter)'
//                 )}
//               </button>
//             </div>

//             {/* Code Output */}
//             {code && (
//               <div className={`${cardClass} rounded-xl p-6 shadow-lg`}>
//                 <div className="flex items-center justify-between mb-4">
//                   <h2 className="text-lg font-semibold">Generated Code</h2>
//                   <button
//                     onClick={handleCopy}
//                     className={`flex items-center gap-2 px-4 py-2 rounded-lg ${hoverClass} transition-colors`}
//                   >
//                     {copied ? (
//                       <>
//                         <Check size={16} className="text-green-500" />
//                         <span className="text-sm">Copied!</span>
//                       </>
//                     ) : (
//                       <>
//                         <Copy size={16} />
//                         <span className="text-sm">Copy</span>
//                       </>
//                     )}
//                   </button>
//                 </div>
                
//                 <div className={`rounded-lg overflow-hidden ${darkMode ? 'bg-gray-950' : 'bg-gray-100'}`}>
//                   <pre className="p-4 overflow-x-auto">
//                     <code 
//                       className={`${darkMode ? 'text-gray-100' : 'text-gray-900'}`}
//                       style={{
//                         fontSize: `${fontSize}px`,
//                         lineHeight: lineHeight,
//                         fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace'
//                       }}
//                     >
//                       {code}
//                     </code>
//                   </pre>
//                 </div>
//               </div>
//             )}
//           </div>

//           {/* Right Panel - History */}
//           <div className="lg:col-span-1">
//             <div className={`${cardClass} rounded-xl p-6 shadow-lg sticky top-24`}>
//               <div className="flex items-center justify-between mb-4">
//                 <h2 className="text-lg font-semibold flex items-center gap-2">
//                   <Clock size={20} />
//                   History
//                 </h2>
//                 <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
//                   {history.length} items
//                 </span>
//               </div>

//               <div className="mb-4 relative">
//                 <Search size={16} className={`absolute left-3 top-3 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
//                 <input
//                   type="text"
//                   value={searchQuery}
//                   onChange={(e) => setSearchQuery(e.target.value)}
//                   placeholder="Search history..."
//                   className={`w-full pl-10 pr-4 py-2 rounded-lg border ${inputClass} focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm`}
//                 />
//               </div>

//               <div className="space-y-2 max-h-[600px] overflow-y-auto">
//                 {filteredHistory.length === 0 ? (
//                   <p className={`text-sm ${darkMode ? 'text-gray-500' : 'text-gray-400'} text-center py-8`}>
//                     {searchQuery ? 'No matching history' : 'No history yet'}
//                   </p>
//                 ) : (
//                   filteredHistory.map((item) => (
//                     <div
//                       key={item.id}
//                       className={`p-3 rounded-lg border ${darkMode ? 'border-gray-700 hover:bg-gray-750' : 'border-gray-200 hover:bg-gray-50'} cursor-pointer transition-colors group`}
//                       onClick={() => loadFromHistory(item)}
//                     >
//                       <div className="flex items-start justify-between mb-2">
//                         <span className={`text-xs px-2 py-1 rounded ${darkMode ? 'bg-blue-900 text-blue-200' : 'bg-blue-100 text-blue-800'}`}>
//                           {item.language}
//                         </span>
//                         <div className="flex gap-1">
//                           <button
//                             onClick={(e) => {
//                               e.stopPropagation();
//                               toggleFavorite(item.id);
//                             }}
//                             className={`p-1 rounded ${hoverClass}`}
//                           >
//                             <Star
//                               size={14}
//                               className={item.favorite ? 'fill-yellow-500 text-yellow-500' : ''}
//                             />
//                           </button>
//                           <button
//                             onClick={(e) => {
//                               e.stopPropagation();
//                               deleteHistoryItem(item.id);
//                             }}
//                             className={`p-1 rounded ${hoverClass} text-red-500`}
//                           >
//                             <Trash2 size={14} />
//                           </button>
//                         </div>
//                       </div>
//                       <p className="text-sm font-medium line-clamp-2 mb-1">{item.prompt}</p>
//                       <p className={`text-xs ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
//                         {new Date(item.timestamp).toLocaleString()}
//                       </p>
//                     </div>
//                   ))
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;

import React, { useState, useMemo } from 'react';
import Header from './components/Header';
import SettingsPanel from './components/SettingsPanel';
import PromptInput from './components/PromptInput';
import CodeOutput from './components/CodeOutput';
import HistoryPanel from './components/HistoryPanel';
import { mockGenerateCode } from './services/mockApi';
import { useLocalStorage } from './hooks/useLocalStorage';
import { STORAGE_KEYS, DEFAULT_SETTINGS } from './utils/constants';

function App() {
  const [prompt, setPrompt] = useState('');
  const [code, setCode] = useState('');
  const [language, setLanguage] = useState('python');
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSettings, setShowSettings] = useState(false);
  
  const [darkMode, setDarkMode] = useLocalStorage(STORAGE_KEYS.DARK_MODE, DEFAULT_SETTINGS.darkMode);
  const [history, setHistory] = useLocalStorage(STORAGE_KEYS.HISTORY, []);
  const [fontSize, setFontSize] = useLocalStorage(STORAGE_KEYS.FONT_SIZE, DEFAULT_SETTINGS.fontSize);
  const [lineHeight, setLineHeight] = useLocalStorage(STORAGE_KEYS.LINE_HEIGHT, DEFAULT_SETTINGS.lineHeight);

  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    
    setLoading(true);
    try {
      const response = await mockGenerateCode(prompt, language);
      setCode(response.code);
      
      const newEntry = {
        id: Date.now(),
        prompt,
        code: response.code,
        language,
        timestamp: new Date().toISOString(),
        favorite: false
      };
      
      setHistory(prev => [newEntry, ...prev]);
    } catch (error) {
      console.error('Error generating code:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const toggleFavorite = (id) => {
    setHistory(prev => prev.map(item => 
      item.id === id ? { ...item, favorite: !item.favorite } : item
    ));
  };

  const deleteHistoryItem = (id) => {
    setHistory(prev => prev.filter(item => item.id !== id));
  };

  const loadFromHistory = (item) => {
    setPrompt(item.prompt);
    setCode(item.code);
    setLanguage(item.language);
  };

  const filteredHistory = useMemo(() => 
    history.filter(item =>
      item.prompt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.code.toLowerCase().includes(searchQuery.toLowerCase())
    ),
    [history, searchQuery]
  );

  const bgClass = darkMode ? 'bg-gray-900' : 'bg-gray-50';
  const textClass = darkMode ? 'text-gray-100' : 'text-gray-900';

  return (
    <div className={`min-h-screen ${bgClass} ${textClass} transition-colors duration-200`}>
      <Header 
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        showSettings={showSettings}
        setShowSettings={setShowSettings}
      />
      
      {showSettings && (
        <SettingsPanel
          darkMode={darkMode}
          fontSize={fontSize}
          setFontSize={setFontSize}
          lineHeight={lineHeight}
          setLineHeight={setLineHeight}
        />
      )}

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-4">
            <PromptInput
              darkMode={darkMode}
              prompt={prompt}
              setPrompt={setPrompt}
              language={language}
              setLanguage={setLanguage}
              loading={loading}
              onGenerate={handleGenerate}
            />
            
            <CodeOutput
              darkMode={darkMode}
              code={code}
              copied={copied}
              onCopy={handleCopy}
              fontSize={fontSize}
              lineHeight={lineHeight}
            />
          </div>

          <div className="lg:col-span-1">
            <HistoryPanel
              darkMode={darkMode}
              history={history}
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              onLoadHistory={loadFromHistory}
              onToggleFavorite={toggleFavorite}
              onDeleteHistory={deleteHistoryItem}
              filteredHistory={filteredHistory}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;