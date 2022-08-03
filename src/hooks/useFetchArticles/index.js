import { useState, useEffect } from "react";
import api from "../../services";

const useFetchActicles = () => {
  const [data, setData] = useState({ articles: [] });
  const [url, setUrl] = useState(`/articles`);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

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

  const Pagination = (url) => {
    setUrl(url);
  };
  const Filter = (data) => {
    setData(data);
  };
  return [{ data, isLoading, isError }, Pagination, Filter];
};
export { useFetchActicles };
