import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { signup } from "../../services/authService";

const useSignupFormik = (setLoading) => {
  const navigate = useNavigate();
  const initialValues = { email: "", password: "", confirmPassword: "" };

  const validationSchema = Yup.object({
    email: Yup.string()
      .required("Email is required")
      .matches(/^\S+@\S+\.\S+$/, "Invalid email address"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters"),
    confirmPassword: Yup.string()
      .required("Confirm Password is required")
      .oneOf([Yup.ref("password"), null], "Passwords must match"),
  });

  const onSubmit = async (values) => {
    setLoading(true);
    const res = await signup(values);
    if (res) navigate("/login");
    setLoading(false);
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: () => onSubmit(formik.values),
  });

  return formik;
};

export default useSignupFormik;
