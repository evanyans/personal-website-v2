import * as React from "react"
import { styled } from "styled-components"
import yelpcamp from "../../images/yelpcamp.png"
import { TechList } from "../lists/TechList"

export const ExpItem = ({tech=["React", "Javascript"], link="https://www.google.com/", title="Default", desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "}) => {
    const images = [yelpcamp]
    return(
        <ExpCard href={link} target="_blank">
            <Year>2019-2023</Year>
            <InfoCard>
                <Title>{title} ↗</Title>
                <Desc>{desc}</Desc>
                <TechList tech={tech}/>
            </InfoCard>
        </ExpCard>
    )
}

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
    border-radius:0.2em;
    border: 2px solid rgba(0, 0, 0, 0);
`