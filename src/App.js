import './App.css';
import Home from './pages/Home/Home';
import { Routes, Route } from 'react-router-dom';
import Morearts from './components/Morearts/Morearts';

function App() {
  return (
    <div className="App">
      {/* <Morearts/> */}
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>      
    </div>
  );
}

export default App;
