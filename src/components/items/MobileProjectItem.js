import * as React from "react"
import { styled } from "styled-components"
import yelpcamp from "../../images/yelpcamp.png"
import { TechList } from "../lists/TechList"
import { useState } from "react"

import site from "../../images/site.png"
import van from "../../images/van.png"
import spotify from "../../images/spotify.png"
import creditcrimes from "../../images/creditcrimes.png"
import tina from "../../images/tina.png"

export const MobileProjectItem = ({tech=["React", "Javascript"], pic=0, link="https://www.google.com", title="Default", desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "}) => {
    const images = [yelpcamp, site, van, spotify, creditcrimes, tina]
    const [active, setActive] = useState(false)
    return(
        <Wrapper>
        <ProjectCard onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)}>
            <Image loading="lazy" src={images[pic]} width="160" height="90"/>
            <InfoCard>
                <Obj><Title href={link} target="_blank">{title} <Highlight style={active ? 
                    {bottom:'3px', left:'3px'} : 
                    {bottom: '0', left:'0'}}>↗</Highlight></Title></Obj>
                <Desc>{desc}</Desc>
                <TechList tech={tech}/>
            </InfoCard>
        </ProjectCard>
        </Wrapper>
    )
}


const Wrapper = styled.div`
    display:none;
    @media (max-width: 1350px){
        display:inline-block;
    }
`


const ProjectCard = styled.a`
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
    font-weight:500;
    font-size:1em;
    margin-bottom:0.69em;
    color: ${({theme}) => theme.colors.text};
    z-index:1;
    text-decoration:none;
`

const Desc = styled.div`
    font-weight: 400;
    font-size: 0.875em;
    color: ${({theme}) => theme.colors.subtext};
    margin-bottom: 0.69em;
`

const Image = styled.img`
    margin-right:2em;
    border-radius:0.2em;
    border: 2px solid ${({theme}) => theme.colors.hoverBorder};

    @media only screen and (max-width: 768px) {
        
    }

    @media only screen and (max-width: 600px) {
        width: 192px;
        height:108px;
        flex-direction: column;
        margin-top:1em;
        order:4;
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