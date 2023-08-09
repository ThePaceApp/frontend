import './App.css';
import LandingPage from './pages/landinpage/LandingPage';
import { Route,Routes } from 'react-router-dom';
import UserPage from "./pages/userpage/UserPage";

function App() {
  return (
    <div className="App">
    <Routes>
        <Route path='/' element={<LandingPage/> }/>
        <Route path='/User' element={<UserPage/>}/>
    </Routes>
    </div>
  );
}

export default App;
