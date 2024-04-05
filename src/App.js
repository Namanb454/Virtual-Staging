import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from './pages/Home';
import LocomotiveScroll from 'locomotive-scroll';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';
import Logins from './pages/test';
// import GenerateImage from './pages/GenerateImage';
import VirtualStagingComponent from './pages/GenerateImage';
import About from './pages/About';
import Photographers from './pages/Photographers';
// import MyComponent from './pages/GenerateImage';
import InteriorDesign from './pages/InteriorDesign';
import Agents_Brokers from './pages/Agents_Brokers';
import VirtualStaging from './pages/GenerateImage';
import Auth from './landingpage/Auth';
function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <>
      <BrowserRouter>
        <Routes >
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/auth' element={<Auth />} />
          <Route path='/sign-in' element={<Login />} />
          {/* <Route path='/sign-up' element={<Register />} /> */}
          <Route path='/logins' element={<Logins />} />
          <Route path='/generate-image' element={<VirtualStaging />} />
          <Route path='/photographers' element={<Photographers />} />
          <Route path='/interior-design' element={<InteriorDesign />} />
          <Route path='/agents-&-brokers' element={<Agents_Brokers />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
