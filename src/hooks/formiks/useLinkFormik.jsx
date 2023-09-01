import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { createLink, updateLink, getLink } from "../../services/linkService";

const useLinkFormik = (setLoading, id = null) => {
  const navigate = useNavigate();
  const [fetchingLinkData, setFetchingLinkData] = useState(!!id);

  const initialValues = {
    pageName: "",
    link: "",
  };

  const validationSchema = Yup.object({
    pageName: Yup.string().required("Page Name is required"),
    link: Yup.string().required("Link is required").url("Invalid URL"),
  });

  const onSubmit = async (values) => {
    setLoading(true);
    const res = await (id ? updateLink(values, id) : createLink(values));
    if (res) navigate("/");
    setLoading(false);
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  useEffect(() => {
    const fetchInitialValues = async () => {
      const res = await getLink(id);

      if (res) {
        formik.setValues({
          pageName: res.data.link.pageName,
          link: res.data.link.originalLink,
        });
      }

      setFetchingLinkData(false);
    };

    if (id) fetchInitialValues();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return { fetchingLinkData, formik };
};

export default useLinkFormik;
