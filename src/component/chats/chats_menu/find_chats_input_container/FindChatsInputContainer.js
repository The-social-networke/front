import React, { useState } from 'react';
// Styles
import {
    Wrapper,
    Container,
    SearchImg,
    EndImg,
    SearchInput
} from "./FindChatsInputContainer.styles";
// Images
import searchBlackImg from '../../../../image/searchGrey.png';
import searchBlueImg from '../../../../image/searchBlue.png';
import closeSearchGreyImg from '../../../../image/closeGrey.png';
import closeSearchBlueImg from '../../../../image/closeBlue.png';

const FindChatsInputContainer = ({isFocus, setFocus, text, setText, changeSearchContext}) => {
    let [isFunctionReady, setFunctionReady] = useState(false);
    let timeout;
    let initTimeout = () => {
        timeout = setTimeout(() => {
            setFunctionReady(false);
        }, 2000);
    }

    return (
        <Wrapper>
            <Container isFocus={isFocus}>
                <SearchImg src={isFocus ? searchBlueImg : searchBlackImg} />
                <SearchInput
                    placeholder="Search"
                    value={text}
                    onChange={(e) => {
                        setText(e.target.value);
                        if (!isFunctionReady) {
                            initTimeout();
                            setFunctionReady(true);
                        }
                    }}
                    onFocus={() => setFocus(true)}
                    onBlur={() => setFocus(false)}
                />
                <EndImg
                    src={text !== '' ? closeSearchBlueImg : closeSearchGreyImg}
                    onClick={() => setText("")}
                />
            </Container>
        </Wrapper>
    );
}

export default FindChatsInputContainer;