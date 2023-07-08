import * as React from "react"
import { styled } from "styled-components"
import { LinkButton } from "./LinkButton"

export const Header = () => {
    return(
        <>
        <Wrapper>
            <Toggle>
            <Profile>
                <Name>Evan Yan</Name>
                <Position>I'm a <Highlight>computer science</Highlight> and <Highlight>business administration</Highlight> student studying at the University of Waterloo.</Position>
                <ButtonList>
                    <LinkButton text={"Email"} link={""}/>
                    <LinkButton text={"GitHub"} link={"https://github.com/evanyans"}/>
                    <LinkButton text={"LinkedIn"} link={"https://www.linkedin.com/in/yanevan/"}/>
                    <LinkButton text={"Resume"} link={"https://github.com/evanyans"}/>
                </ButtonList>  
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
    padding-left:6em;
    padding-right:6em;

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

const ButtonList = styled.div`
    display:flex;
    flex-direction:row;
    gap:0.8em;
`