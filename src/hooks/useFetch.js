import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    let active = true;
    const fetchData = async () => {
      try {
        const res = await fetch(url);
        if (!res.ok) throw new Error(`Error: ${res.status}`);
        const json = await res.json();
        if (active) setData(json);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchData();
    return () => {
      active = false;
    };
  }, [url]);

  return { data, error };
};

export default useFetch;
