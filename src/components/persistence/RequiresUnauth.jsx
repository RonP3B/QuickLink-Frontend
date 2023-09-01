import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../../hooks/persitance/useAuth";

const RequiresUnauth = () => {
  const { authToken } = useAuth();
  return !authToken ? <Outlet /> : <Navigate to="/" replace />;
};

export default RequiresUnauth;
