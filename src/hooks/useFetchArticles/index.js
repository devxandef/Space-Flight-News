import { useState, useEffect } from "react";

import api from "../../services";

const useFetchActicles = () => {
  const [data, setData] = useState({ articles: [] });

  const [url, setUrl] = useState(`/articles`);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [op, setOp] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        api.get(url).then((res) => {
          if (data.length > 0) setData([...data, ...res.data]);
          else setData(res.data);
        });
      } catch (error) {
        setIsError(true);
      }

      setIsLoading(false);
    };
    fetchData();
  }, [url]);

  useEffect(() => {
    setIsLoading(true);
    const Filter = (newValue) => {
      let sorted = null;
      if (newValue === null) setData(data);
      if (newValue === "Mais novas") {
        sorted = data.sort(
          (objA, objB) =>
            new Date(objA.publishedAt) - new Date(objB.publishedAt)
        );
        setData(sorted);
      }
      if (newValue === "Mais antigas") {
        sorted = data.sort(
          (objA, objB) =>
            new Date(objB.publishedAt) - new Date(objA.publishedAt)
        );
        setData(sorted);
      }

      setIsLoading(false);
    };

    Filter(op);
  }, [op]);

  return [{ data, isLoading, isError }, setUrl, setOp];
};
export { useFetchActicles };
