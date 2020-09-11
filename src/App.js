import React, { useState, useEffect } from "react";
import "./App.css";
import Infobox from "./Infobox";
import Map from "./Map";
import Table from "./Table";
import { Card, CardContent } from "@material-ui/core";
import { MenuItem, FormControl, Select } from "@material-ui/core";
import { sortData } from "./utils";
import LineGraph from "./LineGraph";
import "leaflet/dist/leaflet.css";

function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("worldwide");
  const [countryInfo, setCountryInfo] = useState({});
  const [tableData, setTableData] = useState([]);
  const [mapCenter, setMapCenter] = useState({ lat: 34.80746, lng: -40.4796 });
  const [mapZoom, setMapZoom] = useState(3);
  const [mapCountries, setMapCountries] = useState([]);

  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/all")
      .then((response) => response.json())
      .then((data) => {
        setCountryInfo(data);
      });
  }, []);

  useEffect(() => {
    const getCountriesData = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries")
        .then((response) => response.json())
        .then((data) => {
          const countries = data.map((country) => ({
            name: country.country,
            value: country.countryInfo.iso2,
          }));
          const sortedData = sortData(data);
          setTableData(sortedData);
          setCountries(countries);
          setMapCountries(data);
        });
    };
    getCountriesData();
  }, []);

  const onCountryChange = async (event) => {
    const countryCode = event.target.value;
    const url =
      countryCode === "worldwide"
        ? "https://disease.sh/v3/covid-19/all"
        : `https://disease.sh/v3/covid-19/countries/${countryCode}`;

    await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCountry(countryCode);
        setCountryInfo(data);
        setMapCenter([data.countryInfo.lat, data.countryInfo.long]);
        setMapZoom(4);
      });
  };
  return (
    <>
      <div className="app">
        <div className="app_left">
          <div className="app_header">
            <h1>COVID-19 TRACKER</h1>
            <FormControl className="app_dropdown">
              <Select
                variant="outlined"
                value={country}
                onChange={onCountryChange}
              >
                <MenuItem value="worldwide">Worldwide</MenuItem>
                {countries.map((country) => (
                  <MenuItem value={country.value}>{country.name}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
          <div className="app_stats">
            <Infobox
              title="Coronovirus Cases"
              total={countryInfo.todayCases}
              cases={countryInfo.cases}
            ></Infobox>
            <Infobox
              title="Recovered"
              total={countryInfo.todayRecovered}
              cases={countryInfo.recovered}
            ></Infobox>
            <Infobox
              title="Deaths"
              total={countryInfo.todayDeaths}
              cases={countryInfo.deaths}
            ></Infobox>
          </div>
          <Map countries={mapCountries} center={mapCenter} zoom={mapZoom}></Map>
        </div>
        <Card className="app_right">
          <CardContent>
            <h3>Live cases by Country</h3>
            <Table countries={tableData}></Table>
            <h3>Worldwide new cases</h3>
            <LineGraph></LineGraph>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
export default App;
