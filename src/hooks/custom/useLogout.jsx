import { logout } from "../../services/authService";
import useAuth from "../persitance/useAuth";
import useSweetAlert from "./useSweetAlert";

const useLogout = () => {
  const { setAuthToken } = useAuth();
  const { confirmAlert } = useSweetAlert();

  const logoutUser = async () => {
    const confirmLogout = await confirmAlert(
      "Confirm Logout",
      "Are you sure you want to logout?",
      "Logout"
    );

    if (confirmLogout.isConfirmed) {
      const res = await logout();
      res && setAuthToken("");
    }
  };

  return logoutUser;
};

export default useLogout;
