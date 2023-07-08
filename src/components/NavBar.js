import * as React from "react"
import { styled } from "styled-components"
import { LinkButton } from "./LinkButton"

export const NavBar = () => {
    return (
        <>
         <Wrapper>
            <Profile>
                <Name>Evan Yan</Name>
                <Position>I'm a <Highlight>computer science</Highlight> and <Highlight>business administration</Highlight> student studying at the University of Waterloo.</Position>
                <ButtonList>
                    <LinkButton text={"Email"} link={""} hasLink={false}/>
                    <LinkButton text={"GitHub"} link={"https://github.com/evanyans"}/>
                    <LinkButton text={"LinkedIn"} link={"https://www.linkedin.com/in/yanevan/"}/>
                    <LinkButton text={"Resume"} link={"https://github.com/evanyans"}/>
                </ButtonList>  
            </Profile>
         </Wrapper>
        </>
    )
}

const Wrapper = styled.div`
    position: fixed;
    top: 5rem;
    width: 44em;
    padding-left:6em;

    @media (max-width: 1350px){
        display:none;
    }

`

const Profile = styled.div`
    display: flex;
    flex-direction:column;
    align-items: flex-start;
    padding-right:6rem;
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

const ButtonList = styled.div`
    display:flex;
    flex-direction:row;
    gap:0.8em;
`