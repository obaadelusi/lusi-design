import { Outlet } from "react-router-dom";

import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import Sidebar from "./layouts/Sidebar";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <main className="App-main">
        <Header />
        <div id="page" className="Page">
          <Outlet />
        </div>
        <Footer />
      </main>
    </div>
  );
}

export default App;
