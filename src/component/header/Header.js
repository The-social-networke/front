import React from 'react';
// Routing
import { Link } from 'react-router-dom';
// Images
import logo from '../../image/logo.svg';
// Styles
import { Wrapper, Content, LeftContent, RightContent, LogoImg, Item } from "./Header.styles";

const Header = () => (
    <Wrapper>
        <Content>
            <LeftContent>
                <Link to='/'>
                    <LogoImg src={logo} alt='main-logo'></LogoImg>
                </Link>
                <Item>
                    Link 1
                </Item>
                <Item>|</Item>
                <Item>
                    Link 2
                </Item>
                <Item>|</Item>
                <Item>
                    Link 1
                </Item>
                <Item>|</Item>
                <Item>
                    Link 2
                </Item>
            </LeftContent>
            <RightContent>
                <Item>
                    Login
                </Item>
                <Item>|</Item>
                <Item>
                    Logout
                </Item>
            </RightContent>
        </Content>
    </Wrapper>
);

export default Header;