import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import EncuentraPerfilIdeal from './pages/EncuentraPerfilIdeal';

import PrivateRoute from './Router/PrivateRoute';
import Profile from './components/dashboard/settings/Profile';
import Config from './components/dashboard/settings/Config';
import SettingsSpace from './pages/Settings';
import DashboardSA from './pages/DashboardSA';
import ElementsDasboard from './sections/dashboardSA/ElementsDasboard';
import AllUsers from './sections/dashboardSA/AllUsers';
import ElementsDashboard from './sections/DashboardUSERS/ElementsDashboard';
import UsersChildrensAccount from './sections/DashboardUSERS/UsersChildrensAccount';
import UserView from './sections/DashboardUSERS/UserView';


const RouterApp: React.FC = () => (
  <Router>
    <Routes>
      <Route path="/" element={<LoginPage />} />
     
      <Route element={<PrivateRoute />}>
         
        <Route path="/dashboarduser" element={<DashboardPage />} >
    
        <Route index element={<ElementsDashboard/>} />

       <Route path='usermanagement' element={<UsersChildrensAccount/>}/>
       <Route path='user/:id' element={<UserView/>}/>


        
        <Route path="etpi" element={<EncuentraPerfilIdeal />} />
        
        <Route path="settings" element={<SettingsSpace/>}>
          <Route path="profile" element={<Profile />} />
          <Route path="config" element={<Config />} />
        </Route>
       
</Route>

<Route path='/superdashboard' element={<DashboardSA/>}>

<Route index element={ <ElementsDasboard/>}/>
<Route path='allusers' element={<AllUsers/>} />

 <Route path="etpi" element={<EncuentraPerfilIdeal />} />
        
        <Route path="settings" element={<SettingsSpace/>}>
          <Route path="profile" element={<Profile />} />
          <Route path="config" element={<Config />} />
        </Route>

</Route>

      </Route>

    </Routes>
  </Router>
);

export default RouterApp;