import React from "react";
import { createRoot } from "react-dom/client";

function App() {
  return <div>Spira1 Portal is blooming!</div>;
}

const rootEl = document.getElementById("root");
if (rootEl) {
  createRoot(rootEl).render(<App />);
}
