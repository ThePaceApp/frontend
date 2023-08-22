import './App.css';
import LandingPage from './pages/landinpage/LandingPage';
import { Route,Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <Routes>
        <Route path='/' element={<LandingPage/> }/>
    </Routes>
    </div>
  );
}

export default App;
