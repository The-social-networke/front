import React, {useEffect, useState} from 'react';
// Redux
import { Provider } from "react-redux";
import store from './redux/store';
// Routing
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
// Styles
import { GlobalStyle } from './GlobalStyle';
import { Content, Wrapper } from "./App.styles";
// Components
import Header from './component/header/Header';
import Footer from './component/footer/Footer';
import Custom from './component/custom/Custom';
import Chats from "./component/chats/Chats";
import Login from "./component/auth/login/Login";
import {Spinner} from "./component/util/spiner/Spiner.styles";

function App() {
    return (
        <>
            <Provider store={store}>
                <Router>
                    <Wrapper>
                        <Header />
                        <Content>
                            <Routes>
                                <Route path='/custom' element={<Custom />} />
                                <Route path='/chat/*' element={<Chats />} />
                                <Route path='/login' element={<Login />} />
                                <Route path='/' element={<Spinner />} />
                            </Routes>
                        </Content>
                        <Footer />
                    </Wrapper>
                </Router>
            </Provider>
            <GlobalStyle />
        </>
    );
}

export default App;
