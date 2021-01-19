import { useState } from "react";

export default useApi = (apiFunc) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const request = async (...args) => {
    setLoading(true);
    const response = await apiFunc(...args);
    setLoading(false);

    if (!response.ok) {
      console.log(response.problem + response.error + response.data);
      return setError(true);
    }
    console.log("OK1");
    console.log(response.data);
    setError(false);
    setData(response.data);
  };

  return { data, error, loading, request };
};
