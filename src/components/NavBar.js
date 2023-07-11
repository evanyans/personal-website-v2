import * as React from "react"
import { styled } from "styled-components"
import { ButtonList } from "./lists/ButtonList"
import { Navigator } from "./Navigator"

export const NavBar = () => {
    return (
        <>
         <Wrapper>
            <Profile>
                <Name>Evan Yan</Name>
                <Position>I'm a <Highlight>computer science</Highlight> and <Highlight>business administration</Highlight> student studying at the University of Waterloo.</Position>
                <ButtonList/> 
                <Navigator/> 
            </Profile>
         </Wrapper>
        </>
    )
}

const Wrapper = styled.div`
    position: fixed;
    top: 5rem;
    width: 38em;
    margin-left:3em;
    margin-right:3rem;

    @media (max-width: 1350px){
        display:none;
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
`

const Position = styled.div`
    font-size: 1.9em;
    font-weight: 500;
    line-height:1.3em;
    color: ${({theme}) => theme.colors.subtext};
    margin-bottom:0.5em;
`

const Highlight = styled.mark`
     //background: none;
     //color:${({theme}) => theme.colors.text};
`
