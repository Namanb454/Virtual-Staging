import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from './pages/Home';
import LocomotiveScroll from 'locomotive-scroll';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';
import Logins from './pages/test';
function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <>
      <BrowserRouter>
        <Routes >
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          {/* <Route path='/sign-in' element={<Login />} />
          <Route path='/sign-up' element={<Register />} />
          <Route path='/logins' element={<Logins />} /> */}

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
