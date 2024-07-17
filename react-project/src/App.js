import logo from './logo.svg';
import './App.css';
import Counter from './Components/Counter';
import Home from './Components/Home';
import Product from './Components/Product';

function App() {
  return (

    <div className="App">
      <Home/>
      <Product/>
      <Counter/>
    </div>
  );
}

export default App;
