import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import {BrowserRouter, Route, Routes} from "react-router";
import Index from "./pages/index/Index.jsx";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Index />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
