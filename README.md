# 🚀 Mini Code Copilot

A lightweight, AI-powered code generation tool built with React. Enter natural language prompts and get instant code suggestions in Python, JavaScript, or C.

![Mini Code Copilot](https://img.shields.io/badge/React-18.x-blue.svg)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.x-38bdf8.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)

## 📸 Preview

```
┌─────────────────────────────────────────────────────────────┐
│  </>  Mini Code Copilot               🌙  ⚙️              │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ┌──────────────────┐  ┌─────────────────────────────────┐ │
│  │  Enter Prompt    │  │  Generated Code                 │ │
│  │                  │  │                                 │ │
│  │  [Python ▼]     │  │  def reverse_string(s):         │ │
│  │                  │  │      return s[::-1]             │ │
│  │  Write a         │  │                                 │ │
│  │  function to     │  │  # Example usage                │ │
│  │  reverse string  │  │  result = reverse_string("hi")  │ │
│  │                  │  │                                 │ │
│  │  [Generate Code] │  │  [Copy] ✓ Copied!              │ │
│  └──────────────────┘  └─────────────────────────────────┘ │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐   │
│  │  📜 History                           5 items       │   │
│  │  ┌───────────────────────────────────────────────┐ │   │
│  │  │ 🔍 Search history...                          │ │   │
│  │  └───────────────────────────────────────────────┘ │   │
│  │                                                     │   │
│  │  [Python] Write reverse function        ⭐ 🗑️    │   │
│  │  [JavaScript] Fibonacci sequence        ⭐ 🗑️    │   │
│  │  [C] Bubble sort algorithm              ⭐ 🗑️    │   │
│  └─────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
```

## ✨ Features

### Core Features
- 🎯 **Natural Language Prompts** - Describe what you want in plain English
- 💻 **Multi-Language Support** - Python, JavaScript, and C
- 🎨 **Syntax Highlighting** - Clean, readable code output
- 📋 **Copy to Clipboard** - One-click code copying
- ⚡ **Loading States** - Visual feedback during generation

### Bonus Features
- 📜 **Prompt History** - Automatically saved to localStorage
- 🔍 **Search & Filter** - Find previous prompts quickly
- ⭐ **Favorite Prompts** - Star important code snippets
- 🗑️ **Delete History** - Remove unwanted entries
- 🌓 **Dark/Light Mode** - Toggle theme preference
- ⚙️ **Customizable Display** - Adjust font size and line height
- 📱 **Responsive Design** - Works on all screen sizes
- ⌨️ **Keyboard Shortcuts** - `Ctrl+Enter` to generate

## 🛠️ Tech Stack

- **Frontend Framework**: React 18.x
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Build Tool**: Vite
- **State Management**: React Hooks
- **Storage**: LocalStorage API

## 📁 Project Structure

```
mini-code-copilot/
├── src/
│   ├── components/
│   │   ├── Header.jsx              # App header with branding
│   │   ├── SettingsPanel.jsx       # Font/line height settings
│   │   ├── PromptInput.jsx         # Prompt input form
│   │   ├── CodeOutput.jsx          # Code display component
│   │   └── HistoryPanel.jsx        # History sidebar
│   ├── services/
│   │   └── mockApi.js              # Mock API for code generation
│   ├── hooks/
│   │   └── useLocalStorage.js      # Custom localStorage hook
│   ├── utils/
│   │   ├── constants.js            # App constants
│   │   └── codeSnippets.js         # Code templates
│   ├── App.jsx                     # Main app component
│   ├── main.jsx                    # Entry point
│   └── index.css                   # Global styles
├── public/
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/mini-code-copilot.git
cd mini-code-copilot
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```

4. **Open in browser**
```
http://localhost:5173
```

## 📦 Setup from Scratch

### Quick Setup (One Command)
```bash
npm create vite@latest mini-code-copilot -- --template react && cd mini-code-copilot && npm install && npm install lucide-react && npm install -D tailwindcss postcss autoprefixer && npx tailwindcss init -p
```

### Step-by-Step Setup

1. **Create Vite React app**
```bash
npm create vite@latest mini-code-copilot -- --template react
cd mini-code-copilot
```

2. **Install dependencies**
```bash
npm install
npm install lucide-react
npm install -D tailwindcss postcss autoprefixer
```

3. **Initialize Tailwind CSS**
```bash
npx tailwindcss init -p
```

4. **Configure Tailwind** (`tailwind.config.js`)
```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

5. **Add Tailwind directives** (`src/index.css`)
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

6. **Copy all component files** from the modularized structure

7. **Run the app**
```bash
npm run dev
```

## 🎮 Usage

### Basic Usage

1. **Select a language** from the dropdown (Python, JavaScript, or C)
2. **Enter a prompt** describing the code you need
   - Example: "Write a function to reverse a string"
   - Example: "Create a fibonacci sequence generator"
3. **Click Generate** or press `Ctrl+Enter`
4. **View the generated code** with syntax highlighting
5. **Copy to clipboard** using the Copy button

### Using History

- **View past prompts** in the right sidebar
- **Click any history item** to reload it
- **Search history** using the search box
- **Star favorites** for quick access
- **Delete unwanted** history items

### Customization

1. Click the **Settings icon** (⚙️) in the header
2. Adjust **Font Size** (10-20px)
3. Adjust **Line Height** (1.2-2.0)
4. Toggle **Dark/Light Mode** with the theme button

## 🧪 Supported Prompts

The mock API recognizes these keywords:

| Keyword | Generated Code |
|---------|---------------|
| `reverse` | String reversal function |
| `fibonacci`, `fib` | Fibonacci sequence generator |
| `sort` | Bubble sort implementation |
| _anything else_ | Generic data processing function |

### Example Prompts

- ✅ "Write a Python function to reverse a string"
- ✅ "Create a JavaScript fibonacci sequence"
- ✅ "Write a C program to sort an array"
- ✅ "Generate a function to process data"

## 🏗️ Architecture & Design Decisions

### Component Structure
- **Modular Design**: Each component has a single responsibility
- **Reusable Components**: Can be used independently
- **Props-driven**: Components receive data via props
- **Custom Hooks**: `useLocalStorage` for persistent state

### State Management
- **Local State**: useState for component-specific state
- **Persistent State**: Custom hook for localStorage
- **Derived State**: useMemo for filtered history

### API Design
- **Mock API**: Simulates backend with realistic delays
- **Keyword Matching**: Intelligent snippet selection
- **Extensible**: Easy to replace with real API

### Styling Approach
- **Tailwind CSS**: Utility-first styling
- **Responsive Design**: Mobile-first approach
- **Dark Mode**: Complete theme support
- **Consistent Spacing**: Using Tailwind's spacing scale

## 🚧 Future Improvements

### If I had more time, I would add:

**Features**
- [ ] Real AI integration (OpenAI, Claude API)
- [ ] More programming languages (Java, Go, Rust, etc.)
- [ ] Code execution/preview
- [ ] Export code to file
- [ ] Share code snippets via URL
- [ ] User authentication
- [ ] Cloud sync for history
- [ ] Code templates library
- [ ] Multi-line code editing
- [ ] Syntax error detection

**Technical Improvements**
- [ ] TypeScript for type safety
- [ ] Unit tests (Jest, React Testing Library)
- [ ] E2E tests (Playwright, Cypress)
- [ ] Code splitting for better performance
- [ ] PWA support for offline usage
- [ ] Backend with Express.js/Next.js API routes
- [ ] Database for persistent storage
- [ ] Rate limiting and error handling
- [ ] Analytics and usage tracking

**UI/UX Enhancements**
- [ ] Code diff viewer for iterations
- [ ] Side-by-side comparison
- [ ] Animation improvements
- [ ] Accessibility improvements (ARIA labels, keyboard nav)
- [ ] Onboarding tutorial
- [ ] Tooltips and help text
- [ ] Drag-and-drop file support
- [ ] Multi-tab interface

## 🔌 API Integration

### Current Mock API

```javascript
// Example API call
const response = await mockGenerateCode(prompt, language);
// Returns: { code: "generated code string" }
```

### Replacing with Real API

To integrate with a real API (e.g., OpenAI, Claude):

1. **Update `src/services/mockApi.js`**
```javascript
export const generateCode = async (prompt, language) => {
  const response = await fetch('YOUR_API_ENDPOINT', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${YOUR_API_KEY}`
    },
    body: JSON.stringify({ 
      prompt: `Generate ${language} code: ${prompt}`,
      language 
    })
  });
  
  const data = await response.json();
  return { code: data.code };
};
```

2. **Add environment variables** (`.env`)
```
VITE_API_KEY=your_api_key_here
VITE_API_ENDPOINT=https://api.example.com/generate
```

3. **Update imports** in `App.jsx`

## 🎨 Customization

### Changing Theme Colors

Edit `src/index.css` or `tailwind.config.js`:

```javascript
// tailwind.config.js
theme: {
  extend: {
    colors: {
      primary: '#3b82f6',
      secondary: '#8b5cf6',
    }
  }
}
```

### Adding New Languages

1. Add language to `src/utils/constants.js`
```javascript
export const LANGUAGES = {
  PYTHON: 'python',
  JAVASCRIPT: 'javascript',
  C: 'c',
  JAVA: 'java', // New language
};
```

2. Add code snippets to `src/utils/codeSnippets.js`
```javascript
export const codeSnippets = {
  // ... existing languages
  java: {
    'reverse': `public class Main { ... }`,
    // ... more snippets
  }
};
```

3. Add option to `PromptInput.jsx`
```jsx
<option value={LANGUAGES.JAVA}>Java</option>
```

## 📝 Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

## 🌐 Deployment

### Deploy to Vercel

1. **Install Vercel CLI**
```bash
npm install -g vercel
```

2. **Deploy**
```bash
npm run build
vercel
```

### Deploy to Netlify

1. **Install Netlify CLI**
```bash
npm install -g netlify-cli
```

2. **Deploy**
```bash
npm run build
netlify deploy --prod --dir=dist
```

### Deploy to GitHub Pages

1. **Install gh-pages**
```bash
npm install --save-dev gh-pages
```

2. **Add to package.json**
```json
{
  "homepage": "https://yourusername.github.io/mini-code-copilot",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

3. **Deploy**
```bash
npm run deploy
```

## 🐛 Troubleshooting

### Common Issues

**Issue**: Tailwind styles not loading
```bash
# Solution: Restart dev server
npm run dev
```

**Issue**: LocalStorage not persisting
```bash
# Solution: Check browser settings, ensure cookies/storage enabled
```

**Issue**: Icons not rendering
```bash
# Solution: Reinstall lucide-react
npm uninstall lucide-react
npm install lucide-react
```

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👏 Acknowledgments

- Inspired by GitHub Copilot, Replit, and other code assistants
- Built with modern React best practices
- Icons from [Lucide Icons](https://lucide.dev/)
- Styling with [Tailwind CSS](https://tailwindcss.com/)

## 📧 Contact

**Developer**: Ritik kumar 
**Email**: ritik130402@gmaile2.com  
**GitHub**: [Ritik1304](https://github.com/Ritik1304)

## 🔗 Links

- **Live Demo**: [mini-code-copilot.vercel.app](https://mini-code-copilot.vercel.app)

---

<p align="center">
  Made with ❤️ by Ritik kumar
</p>

<p align="center">
  ⭐ Star this repository if you found it helpful!
</p>
