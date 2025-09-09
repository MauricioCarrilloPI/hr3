
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';


import {  selectIsAuthenticated } from '../store/slices/AuthSlice';


const PrivateRoute: React.FC = () => {
  const isAuthenticated = useSelector(selectIsAuthenticated);
 

 /*   useEffect(() => {
    dispatch(checkTokenExpiration());
  }, [dispatch]);  */

console.log('isAuthenticated private route:', isAuthenticated)

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;