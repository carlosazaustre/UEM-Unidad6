import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import CoinDetails from './pages/CoinDetails';
import AuthRoute from './AuthRoute';
import './App.css';

function App() {

  return (
    <>
      <BrowserRouter>
        <header>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
            </ul>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/crypto/:cryptoId" element={
            <AuthRoute>
              <CoinDetails />
            </AuthRoute>
          }/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
