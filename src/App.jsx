import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar';
import Themes from './components/Themes';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Portfolio from './pages/portfolio/portfolio';
import Contact from './pages/contact/Contact';

function App() {

  return (
  <BrowserRouter>
  <Navbar />
  <Themes/>
  <Routes>

    <Route index element={<Home/>}/>
    <Route path='about' element={<About/>}/>
    <Route path='Portfolio' element={<Portfolio/>}/>
    <Route path='Contact' element={<Contact/>}/>

  </Routes>

 </BrowserRouter>
  );
}

export default App;
