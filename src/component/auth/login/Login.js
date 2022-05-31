import React from "react";
// Styles
import {
    Wrapper
} from "./Login.styles";
// Redux
import { login } from "../../../redux/slice/userSlice";
import { useDispatch } from "react-redux";

let Login = () => {
    const dispatch = useDispatch();

    let login = () => {
        dispatch(login({}))
            //.then(() => dispatch(getUser()));
    }

    return (
        <Wrapper>
            asdas
        </Wrapper>
    )
};

export default Login;