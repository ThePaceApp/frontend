import './App.css';
import LandingPage from './pages/landinpage/LandingPage';
import { Route,Routes } from 'react-router-dom';
import UserPage from './pages/userpage/UserPage';
import Login from './components/userpageComp/login/Login';
import Register from './components/userpageComp/register/Register';
import ResetPassword from './components/userpageComp/Reset/ResetPassword';
import Dashboard from './pages/dashboard/Dashboard';

function App() {
  return (
    <div className="App">
    <Routes>
        <Route path='/' element={<LandingPage/> }/>
        <Route path='User' element={<UserPage/>}>
          <Route index element={<Login/>} />
          <Route path='Login' element={<Login/>}/>
          <Route path='Register' element={<Register/>}/>
          <Route path='ResetPassword' element={<ResetPassword/>}/>
        </Route>
        <Route path="Dashboard" element={<Dashboard/>}/>
    </Routes>
    </div>
  );
}

export default App;
