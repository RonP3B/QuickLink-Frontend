import useAuth from "./useAuth";
import api from "../../services/api";

const REFRESH_TOKEN_ENDPOINT = import.meta.env.VITE_REFRESH_TOKEN_ENDPOINT;
const VALID_REFRESH_ENDPOINT = import.meta.env.VITE_VALID_REFRESH_ENDPOINT;

const useRefreshToken = () => {
  const { setAuthToken } = useAuth();

  const refreshAccessToken = async () => {
    let res = await api.get(VALID_REFRESH_ENDPOINT);
    const hasValidRefreshToken = res && res.data.validRefreshToken;

    if (!hasValidRefreshToken) return;

    res = await api.get(REFRESH_TOKEN_ENDPOINT);
    const accessToken = res && res.data.accessToken;
    accessToken && setAuthToken(accessToken);

    return accessToken;
  };

  return { refreshAccessToken };
};

export default useRefreshToken;
