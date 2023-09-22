import SignUp from "./pages/SignUp";
import {Route, Routes} from "react-router-dom";
import {Home} from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/dashboard/Dashboard";
import {Users} from "./components/dashboard/pages/Users";
import EditUsers from "./components/dashboard/pages/EditUsers";
import CreateUser from "./components/dashboard/pages/CreateUser";

function App() {
  return (
        <Routes>
            <Route path={'/'} element={<Home />} />
            <Route path={'/register'} element={<SignUp />} />
            <Route path={'/login'} element={<Login />} />
            {/* dashboard nested routes */}
            <Route path={'/dashboard'} element={<Dashboard />}>
                <Route path={'users'} element={<Users />} />
                <Route path={'users/:id'} element={<EditUsers />} />
                <Route path={'user/create'} element={<CreateUser />} />
            </Route>
        </Routes>
  );
}

export default App;