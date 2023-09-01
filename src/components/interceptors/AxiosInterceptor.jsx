import { useEffect } from "react";
import { toast } from "react-toastify";
import api from "../../services/api";
import useAuth from "../../hooks/persitance/useAuth";
import useRefreshToken from "../../hooks/persitance/useRefreshToken";

const AxiosInterceptor = ({ children }) => {
  const { authToken, setAuthToken } = useAuth();
  const { refreshAccessToken } = useRefreshToken();

  useEffect(() => {
    const requestIntercept = api.interceptors.request.use((config) => {
      if (!config.headers["Authorization"] && authToken) {
        config.headers["Authorization"] = `Bearer ${authToken}`;
      }

      return config;
    });

    const responseIntercept = api.interceptors.response.use(
      //Success response intercepted
      (response) => {
        const toastMsg = response.data.toastMsg;
        if (toastMsg) toast.success(toastMsg);
        return response;
      },

      //Error response intercepted
      async (error) => {
        const prevRequest = error.config;
        const data = error.response.data;
        const toastMg = data.toastMsg;

        if (toastMg) toast.error(toastMg);

        if (data.code === "ERR_JWT" && !prevRequest.sent) {
          prevRequest.sent = true;
          const newToken = await refreshAccessToken();

          if (!newToken) {
            setAuthToken("");
            return;
          }

          prevRequest.headers["Authorization"] = `Bearer ${newToken}`;
          return api(prevRequest);
        }

        //return Promise.reject(error);
      }
    );

    return () => {
      api.interceptors.request.eject(requestIntercept);
      api.interceptors.response.eject(responseIntercept);
    };
  }, [authToken, refreshAccessToken, setAuthToken]);

  return children;
};

export default AxiosInterceptor;
