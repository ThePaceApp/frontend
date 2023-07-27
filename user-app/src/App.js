import './App.css';
import ReadMore from './components/landingpageComp/readmore/ReadMore';
import LandingPage from './pages/landinpage/LandingPage';
import { Route,Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
    <Routes>
        <Route path='/' element={<LandingPage/> }/>
        <Route path='/readmore' element={<ReadMore/>}/>
    </Routes>
    </div>
  );
}

export default App;
