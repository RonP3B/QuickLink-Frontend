import { Route, Routes } from "react-router-dom";
import useAuth from "./hooks/persitance/useAuth";
import Redirect from "./components/custom/Redirect";

//Persistance
import RequiresAuth from "./components/persistence/RequiresAuth";
import RequiresUnauth from "./components/persistence/RequiresUnauth";
import PersistLogin from "./components/persistence/PersistLogin";

//Pages
import LoginPage from "./components/pages/Login";
import HomePage from "./components/pages/Home";
import SignupPage from "./components/pages/Signup";
import AddLink from "./components/pages/AddLink";
import EditLink from "./components/pages/EditLink";
import About from "./components/pages/About";
import NotFound from "./components/pages/NotFound";

//Layouts
import UnloggedLayout from "./components/layouts/UnloggedLayout";
import LoggedLayout from "./components/layouts/loggedLayout";

function App() {
  const { authToken } = useAuth();

  return (
    <Routes>
      <Route
        path="/"
        element={authToken ? <LoggedLayout /> : <UnloggedLayout />}
      >
        <Route element={<PersistLogin />}>
          {/* Routes that require to be unauthorized  */}
          <Route element={<RequiresUnauth />}>
            <Route path="login" element={<LoginPage />} />
            <Route path="signup" element={<SignupPage />} />
          </Route>

          {/* Routes that require to be authorized */}
          <Route element={<RequiresAuth />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/add-link" element={<AddLink />} />
            <Route path="/edit-link/:id" element={<EditLink />} />
            <Route path="/about" element={<About />} />
          </Route>

          {/* Non-existence handler */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Route>

      {/* Redirect route */}
      <Route path="/:shortenedLink" element={<Redirect />} />
    </Routes>
  );
}

export default App;
