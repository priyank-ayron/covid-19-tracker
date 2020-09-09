import React from "react";
import "./App.css";
import Dropdown from "./Dropdown";
import Infobox from "./Infobox";
import Map from "./Map";
import { Card, CardContent } from "@material-ui/core";

function App() {
  return (
    <>
      <div className="app">
        <div className="app_left">
          <Dropdown></Dropdown>
          <div className="app_stats">
            <Infobox
              title="Coronovirus Cases"
              total={4000}
              cases={32}
            ></Infobox>
            <Infobox title="Recovered" total={4400} cases={312}></Infobox>
            <Infobox title="Deaths" total={3000} cases={332}></Infobox>
          </div>
          <Map></Map>
        </div>
        <Card className="app_right">
          <CardContent>
            <h3>Live cases by Country</h3>
            {/* Table */}
            <h3>Worldwide new cases</h3>
            {/* Graph */}
          </CardContent>
        </Card>
      </div>
    </>
  );
}

export default App;
