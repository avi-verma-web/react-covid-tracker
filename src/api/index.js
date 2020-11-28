import React, { useEffect, useState } from "react";
import axios from "axios";

const url = "https://covid19.mathdro.id/api";

const FetchDataApi = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(url);
      setData({ data: res.data });
    };
    fetchData();
  }, []);
  return { data: [data, setData] };
};

export default FetchDataApi;
