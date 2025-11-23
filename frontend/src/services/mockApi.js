import { codeSnippets } from '../utils/codeSnippets';

export const mockGenerateCode = async (prompt, language) => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  const promptLower = prompt.toLowerCase();
  let selectedSnippet = 'default';
  
  if (promptLower.includes('reverse')) {
    selectedSnippet = 'reverse';
  } else if (promptLower.includes('fibonacci') || promptLower.includes('fib')) {
    selectedSnippet = 'fibonacci';
  } else if (promptLower.includes('sort')) {
    selectedSnippet = 'sort';
  }

  return {
    code: codeSnippets[language][selectedSnippet] || codeSnippets[language].default
  };
};