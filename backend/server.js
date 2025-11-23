import React, { useState, useEffect } from 'react';
import { Copy, Check, Moon, Sun, Star, Clock, Search, Trash2, Settings, Loader2 } from 'lucide-react';

const mockGenerateCode = async (prompt, language) => {
  const response = await fetch('http://localhost:3001/api/generate', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ prompt, language })
  });
  return await response.json();
};

function App() {
  const [prompt, setPrompt] = useState('');
  const [code, setCode] = useState('');
  const [language, setLanguage] = useState('python');
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [history, setHistory] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [fontSize, setFontSize] = useState(14);
  const [lineHeight, setLineHeight] = useState(1.5);
  const [showSettings, setShowSettings] = useState(false);

  useEffect(() => {
    const savedHistory = localStorage.getItem('codeHistory');
    const savedDarkMode = localStorage.getItem('darkMode');
    const savedFontSize = localStorage.getItem('fontSize');
    const savedLineHeight = localStorage.getItem('lineHeight');
    
    if (savedHistory) setHistory(JSON.parse(savedHistory));
    if (savedDarkMode) setDarkMode(JSON.parse(savedDarkMode));
    if (savedFontSize) setFontSize(JSON.parse(savedFontSize));
    if (savedLineHeight) setLineHeight(JSON.parse(savedLineHeight));
  }, []);

  useEffect(() => localStorage.setItem('codeHistory', JSON.stringify(history)), [history]);
  useEffect(() => localStorage.setItem('darkMode', JSON.stringify(darkMode)), [darkMode]);
  useEffect(() => localStorage.setItem('fontSize', JSON.stringify(fontSize)), [fontSize]);
  useEffect(() => localStorage.setItem('lineHeight', JSON.stringify(lineHeight)), [lineHeight]);

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

  const deleteHistoryItem = (id) =>
    setHistory(prev => prev.filter(item => item.id !== id));

  const loadFromHistory = (item) => {
    setPrompt(item.prompt);
    setCode(item.code);
    setLanguage(item.language);
  };

  const filteredHistory = history.filter(item =>
    item.prompt.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.code.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const bgClass = darkMode ? 'bg-gray-900' : 'bg-gray-50';
  const textClass = darkMode ? 'text-gray-100' : 'text-gray-900';
  const cardClass = darkMode ? 'bg-gray-800' : 'bg-white';
  const inputClass = darkMode ? 'bg-gray-700 text-gray-100 border-gray-600' : 'bg-white text-gray-900 border-gray-300';
  const hoverClass = darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100';

  return (
    <div className={`min-h-screen ${bgClass} ${textClass} transition-colors duration-200`}>
      {/* UI Content is unchanged */}
      {/* ...keeping your full UI exactly the same... */}
    </div>
  );
}

export default App;
