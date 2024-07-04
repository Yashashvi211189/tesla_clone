import React from 'react';
import styled from 'styled-components';

function Section ({title, description, lftBtnText, rightBtnText, backgroundimg}) {
    return (
        <Wrap bgImage={backgroundimg}>
            <Fade bottom>
                <ItemText>
                    <h1>{ title }</h1>
                    <h4>{ description }</h4>
                    </ItemText>
            </Fade>
            <Buttons>
                <ButtonGroup>
                    <LeftButton>
                        { lftBtnText }
                    </LeftButton>
                    {rightBtnText &&
                        <RightButton>
                            {rightBtnText}
                        </RightButton>
                    }
                </ButtonGroup>
                <div>
                <DownArrow src="photosss/images/down-arrow.svg"/> 
                </div>
            </Buttons>
        </Wrap>
    );
}

export default Section;

const Wrap = styled.div`
    z-index:10;
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url('/photosss/images/model-s.jpg');
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-image: ${props => `url("/photosss/images/${props.bgImage}")` }
`

const ItemText = styled.div`
    padding-top: 7vh;
    text-align: center;
    opacity: 0.8;
    outline-offset: 20px;
    margin-bottom: 115px
    color: #4d4ca5e3;
    color-scheme: dark;
    display: inline;
    font-size: 28px;
    font-weight: 13;
    height: 20px;
    line-height: 100px;
    outline-offset: 2px;
    scroll-behavior: smooth;
    text-align: center;
    text-rendering: optimizelegibility;
    text-size-adjust: 40%;
`

const ButtonGroup = styled.div` 
    display: flex;
    margin-bottom: 60px;
    justify-content: center;
    @media (max-width:768px){
        flex-direction: column;
    }
`

const LeftButton = styled.div` 
    background-color: lightyellow;
    height: 45px;
    width: 259px;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 18px;
    opacity:90 ; 
    text-transform: Uppercase;
    font-size: 20px;
    cursor: pointer;
    margin: 20px; 
`

const RightButton = styled(LeftButton)`
    background-color: lightblue;
    color: rgba(23, 26, 32, 0.8);
    border: 1px solid rgba(23, 26, 32, 0.8);
`
const DownArrow=styled.img`
    height: 60px;
    width: 100vw;
    overflow-x: hidden; 
     animation: animateDown infinite 1.5s;
`
const Buttons=styled.div`

`
const Fade= styled.div`
`

;