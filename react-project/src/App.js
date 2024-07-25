import logo from './logo.svg';
import './App.css';
import Counter from './Components/Counter';
import Home from './Components/Home';
import Product from './Components/Product';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Contact from './Components/Contact';
import {BrowserRouter as Router, Routes} from 'react-dom'
function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path ='/' element={<Home/>}/>
        <Route path ='/about' element={<About/>}/>
        <Route path ='/contact' element={<Contact/>}/>
      </Routes>
    </div>
    </Router>
  )
}

export default App;
