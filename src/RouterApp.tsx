import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import EncuentraPerfilIdeal from './pages/EncuentraPerfilIdeal';
import Navbar from './components/Navbar';

const RouterApp: React.FC = () => (
  <Router>
    <Navbar/>
    <Routes>
      <Route path="/login" element={<LoginPage/>} />
      <Route path="/dashboard" element={<DashboardPage/>} />
      <Route path="/" element={<DashboardPage />} />
      <Route path="/etpi" element={<EncuentraPerfilIdeal/>}/>
    </Routes>
  </Router>
);



export default RouterApp
