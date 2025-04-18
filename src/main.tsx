
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

// Asegurarse de que el elemento root existe
const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(<App />);
} else {
  console.error("Elemento root no encontrado");
}
