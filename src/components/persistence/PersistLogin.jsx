import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";
import useRefreshToken from "../../hooks/persitance/useRefreshToken";
import useAuth from "../../hooks/persitance/useAuth";

const PersistLogin = () => {
  const { authToken } = useAuth();
  const { refreshAccessToken } = useRefreshToken();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleAccessTokenRefresh = async () => {
      try {
        if (!authToken) await refreshAccessToken();
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    handleAccessTokenRefresh();
  }, [authToken, refreshAccessToken]);

  return (
    <>
      {loading ? <Spinner animation="border" variant="warning" /> : <Outlet />}
    </>
  );
};

export default PersistLogin;
