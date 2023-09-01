import { useParams, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { getOriginalLink } from "../../services/linkService";
import { Spinner } from "react-bootstrap";

const Redirect = () => {
  const { shortenedLink } = useParams();
  const [validShortenedLink, setValidShortenedLink] = useState(true);

  useEffect(() => {
    const fetchOriginalLink = async () => {
      const res = await getOriginalLink(shortenedLink);
      if (!res) return setValidShortenedLink(false);
      window.location.href = res.data.originalLink;
    };

    fetchOriginalLink();
  }, [shortenedLink]);

  return validShortenedLink ? (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <Spinner animation="border" variant="warning" />
    </div>
  ) : (
    <Navigate to="/" replace />
  );
};

export default Redirect;
