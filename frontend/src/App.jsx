import "./index.css";
import "./App.css";
import {BrowserRouter, Route, Routes} from "react-router";
import Index from "./pages/index/Index.jsx";
import Navbar from "./components/navbar/Navbar.jsx";

function App() {

  return (
      <BrowserRouter>
          <div className="border-0 w-screen min-w-[1000px] h-screen bg-[var(--primary-bg)] overflow-y-auto flex flex-col scrollbar-none">
            <Navbar/>
            <Routes>
              <Route path={"/"} element={<Index />}/>
            </Routes>
          </div>
      </BrowserRouter>
  );
}

export default App;
