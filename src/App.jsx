import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom'
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
     <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product-details/' element={<ProductDetails />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>

      <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleInterval" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleInterval" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleInterval" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="/src/assets/negative-space-apple-watch-close-up-1.jpg" class="d-block w-100" alt="..." />
      <div class="carousel-caption d-none d-md-block">
      <h5>High Tech Gadgets</h5>
        <p>Buy Our Most Up To Date Tech Gadgets.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="/src/assets/negative-space-apple-watch-with-lens-1.jpg" class="d-block w-100" alt="..." />
      <div class="carousel-caption d-none d-md-block">
      <h5>High Tech Gadgets</h5>
        <p>Buy Our Most Up To Date Tech Gadgets.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="/src/assets/negative-space-apple-watch-close-up-1.jpg" class="d-block w-100" alt="..." />
      <div class="carousel-caption d-none d-md-block">
        <h5>High Tech Gadgets</h5>
        <p>Buy Our Most Up To Date Tech Gadgets.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
     
     <Footer />
    </Router>
  )
}

export default App
