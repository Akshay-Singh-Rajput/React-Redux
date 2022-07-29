import { Route, Routes } from 'react-router-dom';
import './App.css';
import CartItem from './components/CartItem';
import Navbar from './components/Navbar';
import About from './pages/About';
import Home from './pages/Home';
import Store from './pages/Store';

function App() {
  return (
    <main className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/about" element={ <About /> } />
        <Route path="/store" element={ <Store /> } />
        <Route path="/cart" element={ <CartItem /> } />

      </Routes>

    </main>
  );
}

export default App;
