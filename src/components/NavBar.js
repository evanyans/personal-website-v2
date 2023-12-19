import * as React from "react"
import { styled } from "styled-components"
import { ButtonList } from "./lists/ButtonList"
import { Navigator } from "./Navigator"

export const NavBar = () => {
    return (
        <>
         <Wrapper >
            <Profile>
                <Name>Evan Yan</Name>
               <Position>Computer Science & Business Administration Double Degree @ University of Waterloo</Position>
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
    font-size: 4em;
    font-weight: 700;
    margin-bottom: 5px;
`

const Position = styled.div`
    font-size: 1.2em;
    font-weight: 400;
    line-height:1.3em;
    color: ${({theme}) => theme.colors.subtext};
    margin-bottom:1em;
    margin-right:5em;
`

const Highlight = styled.mark`
     //background: none;
     //color:${({theme}) => theme.colors.text};
`
