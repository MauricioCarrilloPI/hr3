import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import EncuentraPerfilIdeal from './pages/EncuentraPerfilIdeal';
import Navbar from './components/Navbar';
import PrivateRoute from './Router/PrivateRoute';
import Profile from './components/dashboard/settings/Profile';
import Config from './components/dashboard/settings/Config';
import SettingsSpace from './pages/Settings';


const RouterApp: React.FC = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route element={<PrivateRoute />}>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/settings" element={<SettingsSpace/>}>
          <Route path="profile" element={<Profile />} />
          <Route path="config" element={<Config />} />
        </Route>
        <Route path="/etpi" element={<EncuentraPerfilIdeal />} />
      </Route>
    </Routes>
  </Router>
);

export default RouterApp;