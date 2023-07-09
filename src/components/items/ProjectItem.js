import * as React from "react"
import { styled } from "styled-components"
import yelpcamp from "../../images/yelpcamp.png"

export const ProjectItem = ({pic=0, title="Default", desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "}) => {
    const images = [yelpcamp]
    return(
        <ProjectCard>
            <Image loading="lazy" src={images[0]} width="160" height="90"/>
            <InfoCard>
                <Title>{title} ↗</Title>
                <Desc>{desc}</Desc>
            </InfoCard>
        </ProjectCard>
    )
}

const ProjectCard = styled.div`
    width:auto;
    display:flex;
    flex-direction:row;
    padding-top: 1.69em;
    padding-bottom:1.69em;
    padding-left:1em;
    padding-right:1em;
    align-items:flex-start;
    //background:red;
`

const InfoCard = styled.div`
    display:flex;
    flex-direction:column;
`

const Title = styled.a`
    cursor:pointer;
    font-weight:500;
    font-size:1em;
    margin-bottom:0.69em;
`

const Desc = styled.div`
    font-weight: 400;
    font-size: 0.875em;
    color: ${({theme}) => theme.colors.subtext};
`

const Image = styled.img`
    margin-right:2em;
`