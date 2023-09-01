import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const UnloggedLayout = () => {
  return (
    <>
      <main className="App centered-container">
        <Outlet />
      </main>
      <ToastContainer />
    </>
  );
};

export default UnloggedLayout;
