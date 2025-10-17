import { useEffect, useState } from "react";

export default function useIPInfo(ip) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const API_KEY = import.meta.env.VITE_IPIFY_API_KEY;

    async function fatchIPData() {
      setLoading(true);
      try {
        const url = ip
          ? `https://geo.ipify.org/api/v2/country?apiKey=${API_KEY}&ipAddress=${ip}`
          : `https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}`;
        const res = await fetch(url);
        const json = await res.json();
        setData(json);
      } catch(err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fatchIPData();
    
  }, [ip]);
  return {data, loading , error};
}