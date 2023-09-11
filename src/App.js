
import './App.css';

import React, { useState } from 'react'
import NavBar from './Components/NavBar';
import ContactUs from './Components/ContactUs';
import About from './Components/About';
import News from './Components/News';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
export default function App() {
  const pagesize = 12;
  const [mode, setmode] = useState("Light");
  const [Flag, setFalg] = useState(1);
  function changeMode() {
    if (mode === "Light")
      setmode("Dark");
    else
      setmode("Light");
  }
  function RestoreMode() {
    if (mode === "Light")
      setFalg(1)
    else {
      setFalg(0)
    }
  }

  return (
    <BrowserRouter>
      <div>
        <NavBar RestoreMode={RestoreMode} changeMode={changeMode} mode={mode} />
        <Routes>
          <Route exact path="/" element={<News key="general" pageSize={pagesize} category="general" Flag={Flag} RestoreMode={RestoreMode} changeMode={changeMode} mode={mode} />} />

          <Route exact path="/business" element={<News key="business" pageSize={pagesize} category="business" Flag={Flag} RestoreMode={RestoreMode} changeMode={changeMode} mode={mode} />} />

          <Route strict exact path="/entertainment" element={<News key="entertainment" pageSize={pagesize} category="entertainment" Flag={Flag} RestoreMode={RestoreMode} changeMode={changeMode} mode={mode} />} />

          <Route exact path="/general" element={<News key="Gen" pageSize={pagesize} category="general" Flag={Flag} RestoreMode={RestoreMode} changeMode={changeMode} mode={mode} />} />

          <Route exact path="/health" element={<News key="health" pageSize={pagesize} category="health" Flag={Flag} RestoreMode={RestoreMode} changeMode={changeMode} mode={mode} />} />

          <Route exact path="/science" element={<News key="science" pageSize={pagesize} category="science" Flag={Flag} RestoreMode={RestoreMode} changeMode={changeMode} mode={mode} />} />

          <Route exact path="/sports" element={<News key="sports" pageSize={pagesize} category="sports" Flag={Flag} RestoreMode={RestoreMode} changeMode={changeMode} mode={mode} />} />

          <Route exact path="/technology" element={<News key="technology" pageSize={pagesize} category="technology" Flag={Flag} RestoreMode={RestoreMode} changeMode={changeMode} mode={mode} />} />

          <Route exact path="/about" element={<About key="About" mode={mode} />} />

          <Route exact path="/ContactUs" element={<ContactUs key="ContactUs" mode={mode} />} />

        </Routes>
      </div>
    </BrowserRouter>
  )

}



