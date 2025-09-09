import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import EncuentraPerfilIdeal from './pages/EncuentraPerfilIdeal';
import Navbar from './components/Navbar';
import PrivateRoute from './Router/PrivateRoute';

const RouterApp: React.FC = () => (
  <Router>
    <Navbar/>
    <Routes>
      <Route path="/login" element={<LoginPage/>} />


<Route element={<PrivateRoute/>} >
      <Route path="/" element={<DashboardPage />} />
      <Route path="/dashboard" element={<DashboardPage/>} />
      <Route path="/etpi" element={<EncuentraPerfilIdeal/>}/>
</Route>
    
    </Routes>
  </Router>
);



export default RouterApp
