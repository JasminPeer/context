
import './App.css';
import Login from './components/Login';
import { AuthProvider } from './contexts/AuthContext';
import { CardProvider } from './contexts/CartContext';
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  return (
<ThemeProvider>
  <AuthProvider>
<CardProvider>
  <Login/>
</CardProvider>
  </AuthProvider>
</ThemeProvider>
  );
}

export default App;
