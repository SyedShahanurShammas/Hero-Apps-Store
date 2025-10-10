import axios from "axios";
import { useEffect, useState } from "react";

const useLoaderApps = () => {
  const [allApps, setAllApps] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  //   use effect
  useEffect(() => {
    setLoading(true);
    axios("../allData.json")
      .then((data) => setAllApps(data.data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);
  return { allApps, loading, error };
};

export default useLoaderApps;
