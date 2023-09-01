import { useState, useEffect } from "react";
import { getLinks } from "../../services/linkService";

const useLinksData = () => {
  const [links, setLinks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getLinks();
      if (res) setLinks(res.data.links);
      setLoading(false);
    };

    fetchData();
  }, []);

  return { links, loading, setLinks, setLoading };
};

export default useLinksData;
