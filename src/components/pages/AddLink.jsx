import { useState } from "react";
import useLinkFormik from "../../hooks/formiks/useLinkFormik";
import SaveLinkForm from "../custom/SaveLinkForm";

const AddLink = () => {
  const [loading, setLoading] = useState(false);
  const { formik } = useLinkFormik(setLoading);

  return <SaveLinkForm loading={loading} formik={formik} />;
};

export default AddLink;
