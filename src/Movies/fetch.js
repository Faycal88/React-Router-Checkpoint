import { useEffect, useMemo, useState } from "react";

const defaultOptions = {
  headers: {
    Accept: "application/json",
    "Content-type": "application/json",
  },
};

export function useFetch(url, options = {}) {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    const opt = {
      ...defaultOptions,
      options,
    };
    fetch(url, opt)
      .then((res) => {
        if (res.ok) return res.json();
        throw new Error(res.status);
      })
      .then((res) => setData(res))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  },[options, url]);

  return {
    data,
    error,
    loading,
  };
}
