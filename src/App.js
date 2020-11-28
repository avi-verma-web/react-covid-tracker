import React, { useEffect, useState } from "react";

import { Cards, CountryPicker, Chart } from "./components";
import styles from "./App.module.css";
import axios from "axios";

const url = "https://covid19.mathdro.id/api";

const App = () => {
  const [data, setData] = useState({
    confirmed: {},
    recovered: {},
    deaths: {},
    dailySummary: {},
  });

  const [country, setCountry] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(url);
        setData(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const handleCountryChange = async (country) => {
    let changeableUrl = url;
    if (country) {
      changeableUrl = `${url}/countries/${country}`;
      setCountry(country);
    }
    try {
      const res = await axios.get(changeableUrl);
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Avinash covid-19</h1>
      <Cards data={data} />
      <CountryPicker handleCountryChange={handleCountryChange} />
      <Chart data={data} country={country} />
    </div>
  );
};

export default App;
