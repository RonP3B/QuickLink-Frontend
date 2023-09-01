import { useState, useEffect } from "react";

const useFilterLink = (links) => {
  const [filterText, setFilterText] = useState("");
  const [height, setHeight] = useState(0);

  useEffect(() => {
    height === 0 && setFilterText("");
  }, [height]);

  const handleFilterChange = (e) => {
    setFilterText(e.target.value);
  };

  const filteredLinks = links.filter((link) =>
    link.pageName.toLowerCase().includes(filterText.toLowerCase())
  );

  return { filterText, height, setHeight, handleFilterChange, filteredLinks };
};

export default useFilterLink;
