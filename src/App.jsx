import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import AuthContext from "./context/AuthContext";

function App() {
  return (
    <>
      <UserContext.Provider value={}>
        <div className="container">
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    </>
  );
}

export default App;
