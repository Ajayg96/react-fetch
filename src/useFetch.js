import { useEffect, useState } from "react";

function useFetch(url, requestOptions) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (url) fetchData();
  }, []);

  const fetchData = () => {
    fetch(url, requestOptions)
      .then((response) => response.json())
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setError(err);
      });
  };

  return [loading, data, error];
}

function useLazyFetch(url, onResponse, requestOptions) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = () => {
    setLoading(true);
    fetch(url, requestOptions)
      .then((response) => response.json())
      .then((json) => {
        onResponse(json);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setError(err);
      });
  };

  return [fetchData, loading, error];
}

export { useFetch, useLazyFetch };
