import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../contexts/User";
import { useFormik } from "formik";
import * as Yup from "yup";

import Input from "../components/Input";

const Login = () => {
    const { user, setUser } = useContext(UserContext);

    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            email: "test@test.test",
            password: "12345678aA!",
        },

        validationSchema: Yup.object({
            email: Yup.string()
                .required("Your email is required")
                .email("Your email is invalid"),
            password: Yup.string()
                .required("Password is required")
                .min(8, "password trop court")
                .matches(
                    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
                    "password needs Uppercase, lowercase, number and special character"
                ),
        }),

        validateOnChange: false,

        onSubmit: async (values) => {
            const request = await fetch(
                `
                    https://randomuser.me/api/`
            );
            const response = await request.json();
            setUser(response.results);
            console.log(user);
            navigate("./profile");
        },
    });

    return (
        <>
            <form onSubmit={formik.handleSubmit}>
                <Input
                    type="email"
                    name="email"
                    placeholder="email"
                    value={formik.values.email}
                    handleChange={formik.handleChange}
                    handleBlur={formik.handleBlur}
                    error={formik.errors.email}
                    isDisabled={formik.isSubmitting}
                />
                <Input
                    type="password"
                    name="password"
                    placeholder="password"
                    value={formik.values.password}
                    handleChange={formik.handleChange}
                    handleBlur={formik.handleBlur}
                    error={formik.errors.password}
                    isDisabled={formik.isSubmitting}
                />
                <button type="submit" disabled={formik.isSubmitting}>
                    Submit
                </button>
            </form>
        </>
    );
};

export default Login;
