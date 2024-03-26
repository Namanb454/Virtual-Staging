import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from './pages/Home';
import LocomotiveScroll from 'locomotive-scroll';
import Contact from './pages/Contact';
function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <>
      <BrowserRouter>
        <Routes >
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
