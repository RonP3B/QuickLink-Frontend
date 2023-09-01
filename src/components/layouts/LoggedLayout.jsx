import { Outlet } from "react-router-dom";
import Header from "../custom/Header";
import Footer from "../custom/Footer";
import { ToastContainer } from "react-toastify";

const LoggedLayout = () => {
  return (
    <div className="page-container">
      <Header />
      <main className="App page-container__content">
        <Outlet />
      </main>
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default LoggedLayout;
