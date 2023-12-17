import * as React from "react"
import { styled } from "styled-components"
import { ButtonList } from "./lists/ButtonList"

export const Header = () => {
    return(
        <>
        <Wrapper>
            <Toggle>
            <Profile>
                <Name>Evan Yan</Name>
                <Position>I'm a computer science and business administration student studying at the University of Waterloo.</Position>
                <ButtonList/>
            </Profile>
            </Toggle>
         </Wrapper>
        </>
    )
}

const Toggle = styled.div`
    display:none;
    @media (max-width: 1350px){
        display:inline;
    }
`

const Wrapper = styled.div`
    width: 44em;
    margin-left:3em;
    margin-right:3em;
    margin-bottom:5em;

    @media (max-width: 1350px){
        width: auto;
        padding-right:0;
    }

    @media only screen and (max-width: 768px) {
        margin-left:2em;
        margin-right:2em;
        margin-bottom:0;
    }

    @media only screen and (max-width: 600px) {
        margin-left:1em;
        margin-right:1em;
    }
`

const Profile = styled.div`
    display: flex;
    flex-direction:column;
    align-items: flex-start;
    
`

const Name = styled.div`
    font-size: 6em;
    font-weight: 700;
    margin-bottom: 5px;

    @media only screen and (max-width: 768px) {
        font-size:4em;
    }

    @media only screen and (max-width: 600px) {
        font-size:3em;
    }

`

const Position = styled.div`
    font-size: 1.9em;
    font-weight: 500;
    line-height:1.3em;
    color: ${({theme}) => theme.colors.subtext};
    margin-bottom:0.5em;

    @media only screen and (max-width: 768px) {
        font-size:1.5em;
    }

    @media only screen and (max-width: 600px) {
        font-size:1.2em;
    }
`

const Highlight = styled.mark`
     //background: none;
     //color:${({theme}) => theme.colors.text};
`
