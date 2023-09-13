import React from "react";
import './App.css'
import Configurator from './components/Configurator/Configurator'
import Viewer from "./components/Viewer/Viewer";
import Overlay from "./components/Overlay/Overlay";


export default function App() {
  return <>
    <div className="container">
      <Viewer/>
      <Configurator/>
    </div>
    <Overlay/>
  </>
}