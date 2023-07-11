import * as React from "react"
import { styled } from "styled-components"
import yelpcamp from "../../images/yelpcamp.png"
import { TechList } from "../lists/TechList"
import { useState } from "react"

export const MobileExpItem = ({tech=["React", "Javascript"], link="https://www.google.com/", title="Default", desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "}) => {
    const images = [yelpcamp]
    const [active, setActive] = useState(false)
    return(
        <Wrapper>
        <ExpCard onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)}>
            <Year>2019-2023</Year>
            <InfoCard>
                <Obj><Title href={link}>{title} <Highlight style={active ? 
                    {bottom:'3px', left:'3px'} : 
                    {bottom: '0', left:'0'}}>↗</Highlight></Title></Obj>
                <Desc>{desc}</Desc>
                <TechList tech={tech}/>
            </InfoCard>
        </ExpCard>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display:none;
    @media (max-width: 1350px){
        display:inline-block;
    }
`


const ExpCard = styled.a`
    cursor:pointer;
    text-decoration:none;
    width:auto;
    display:flex;
    flex-direction:row;
    padding-top: 1.69em;
    padding-bottom:1.69em;
    padding-left:2em;
    padding-right:2em;
    align-items:flex-start;
    //background:red;
    margin-bottom:0.75em;

    border: 1px solid rgba(255, 255, 255, 0);
    border-radius: 0.5em;
    transition: all 0.1s linear;

    @media (max-width: 1350px){
        cursor:auto;
        padding-left:0;
        padding-right:0;
    }

    @media only screen and (max-width: 768px) {
    }

    @media only screen and (max-width: 600px) {
        flex-direction: column;
    }
`

const InfoCard = styled.div`
    display:flex;
    flex-direction:column;
`

const Title = styled.a`
    text-decoration:none;
    font-weight:500;
    font-size:1em;
    margin-bottom:0.69em;
    color: ${({theme}) => theme.colors.text};
`

const Desc = styled.div`
    font-weight: 400;
    font-size: 0.875em;
    color: ${({theme}) => theme.colors.subtext};
    margin-bottom: 0.69em;
`

const Year = styled.div`
    min-width:160px;
    min-height:90px;
    color: ${({theme}) => theme.colors.subtext};
    font-weight:500;
    font-size:1em;
    margin-right:2em;

    @media only screen and (max-width: 768px) {
    }

    @media only screen and (max-width: 600px) {
        min-height:0px;
        margin-bottom:1em;
    }
`

const Highlight = styled.mark`
    position:relative;
    bottom:0;
    left:0;
    right:0;
    background:none;
    color: ${({theme}) => theme.colors.text};
    transition: all 0.1s ease;
`

const Obj = styled.object`
margin-bottom:0.69em;
`