import React, { Suspense } from "react";
import Scene from "./components/Scene";
import Overlay from "./components/Overlay/Overlay";


export default function App() {
  return <>
    <Suspense fallback={null}>
      <Scene/>
    </Suspense>
    <Overlay/>
  </>
}