import React from "react";
import './App.css'
import Viewer from "./components/Viewer/Viewer";
import Overlay from "./components/Overlay/Overlay";


export default function App() {
  return <>
    <div className="container">
      <Viewer style={{borderRadius: "10%" }}/>
    </div>
    <Overlay/>
  </>
}