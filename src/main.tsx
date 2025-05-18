
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

// Make sure we use createRoot for React 18
const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(<App />);
} else {
  console.error("Elemento root no encontrado");
}
