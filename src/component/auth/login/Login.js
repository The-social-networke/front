import React from "react";
// Styles
import {Wrapper} from "./Login.styles";
// Redux
import {initUser, login} from "../../../redux/slice/userSlice";
import {useDispatch, useSelector} from "react-redux";
import {Field, Form, Formik} from "formik";
import Spinner from "../../util/spiner/Spinner";
import {useNavigate} from "react-router-dom";

let Login = () => {

    const {error, isLoadingLogin} = useSelector(state => state.user);

    const dispatch = useDispatch();

    const navigate = useNavigate();

    return (
        <Wrapper>
            <Formik
                initialValues={{
                    email: '',
                    password: '',
                }}
                onSubmit={
                    async (values) => {
                        let userCreate = {
                            email: values.email,
                            password: values.password
                        };
                        console.log(userCreate)
                        await dispatch(login(userCreate))
                            .then(response => {
                                dispatch(initUser())
                                    .then(response => {
                                        navigate("/chat");
                                    });
                            });
                    }}
            >
                <Form>
                    <label htmlFor="jwtToken"> Email </label><br/>
                    <Field id="email" name="email"/><br/>

                    <label htmlFor="password"> Пароль </label><br/>
                    <Field id="password" type="password" name="password"/><br/>

                    <button type="submit">Submit</button>
                </Form>
            </Formik>
            {isLoadingLogin && <Spinner/>}
            {error && <div> error {error}</div>}
        </Wrapper>
    )
};

export default Login;