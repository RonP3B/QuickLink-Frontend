import { useState } from "react";
import { useParams } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import useLinkFormik from "../../hooks/formiks/useLinkFormik";
import SaveLinkForm from "../custom/SaveLinkForm";

const EditLink = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const { formik, fetchingLinkData } = useLinkFormik(setLoading, id);

  if (fetchingLinkData) {
    return <Spinner animation="border" variant="warning" />;
  }

  return <SaveLinkForm id={id} loading={loading} formik={formik} />;
};

export default EditLink;
