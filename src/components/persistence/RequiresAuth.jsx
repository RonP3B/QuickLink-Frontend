import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../../hooks/persitance/useAuth";

const RequiresAuth = () => {
  const { authToken } = useAuth();
  return authToken ? <Outlet /> : <Navigate to="/login" replace />;
};

export default RequiresAuth;
