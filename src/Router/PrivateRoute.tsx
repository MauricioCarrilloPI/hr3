
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';


import { selectIsAuthenticated } from '../store/slices/AuthSlice';


const PrivateRoute: React.FC = () => {
  const isAuthenticated = useSelector(selectIsAuthenticated);







  return isAuthenticated ? <Outlet /> : <Navigate to="/" replace />;
};

export default PrivateRoute;