import { useFormik } from "formik";
import * as Yup from "yup";
import { login } from "../../services/authService";

const useLoginFormik = (setLoading, setAuthToken) => {
  const initialValues = { email: "", password: "" };

  const validationSchema = Yup.object({
    email: Yup.string()
      .required("Email is required")
      .matches(/^\S+@\S+\.\S+$/, "Invalid email address"),
    password: Yup.string().required("Password is required"),
  });

  const onSubmit = async (values) => {
    setLoading(true);
    const res = await login(values);
    if (res) setAuthToken(res.data.accessToken);
    setLoading(false);
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: () => onSubmit(formik.values),
  });

  return formik;
};

export default useLoginFormik;
