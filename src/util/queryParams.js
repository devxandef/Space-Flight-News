import { useLocation } from "react-router-dom";

function useQuery(param) {
  let query = new URLSearchParams(useLocation().search);
  return query.get(param);
}

export { useQuery };
