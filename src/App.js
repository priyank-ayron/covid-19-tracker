import React from "react";
import "./App.css";
import Dropdown from "./Dropdown";
import Infobox from "./Infobox";

function App() {
  return (
    <>
      <Dropdown></Dropdown>
      <div className="app_stats">
        <Infobox title="Coronovirus Cases" total={4000} cases={32}></Infobox>
        <Infobox title="Recovered" total={4400} cases={312}></Infobox>
        <Infobox title="Deaths" total={3000} cases={332}></Infobox>
      </div>
    </>
  );
}

export default App;
