import './App.css';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage/>}/>
          <Route exact path="/cart" element={<CartPage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
