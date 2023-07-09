import * as React from "react"
import { styled } from "styled-components"
import { ProjectItem } from "../items/ProjectItem"

export const ProjectList = () => {

    return(
        <Projects>
            <ProjectItem 
                link="https://www.google.com"
                tech={["React", "Javascript", "MongoDB", "Express", "Node"]}
                pic={0} 
                title="Statuni" 
                desc="Web application that crowdsources data from university applicants to display admission statistics across Canadian universities."/>
            <ProjectItem 
                link="https://github.com/evanyans/yelpcamp"
                tech={["JavaScript", "MongoDB", "Express", "Node", "Bootstrap"]}
                pic={0} 
                title="YelpCamp" 
                desc="A full-stack campground site where users can create and review campgrounds. Final project from “The Web Developer Bootcamp” on Udemy."/>
            <ProjectItem 
                link="https://www.vancouvercharitygames.com/"
                tech={["React", "TypeScript", "styled-components"]}
                pic={0} 
                title="Vancouver Charity Games" 
                desc="Complete front-end build for a non-profit organization that provides esports opportunities while raising money for local causes."/>
        </Projects>
    )
}

const Projects = styled.div`
    display:flex;
    flex-direction:column;
    transition: all 2s ease;
    margin-bottom: 11em;

    &:hover > a {
        opacity: 0.6;
        transition: all 0.1s linear;
    }

    &:hover > a:hover{
        opacity: 1.0;
        background-color: ${({theme}) => theme.colors.hoverBackground};
        border: 1px solid ${({theme}) => theme.colors.hoverBorder};
        transition: all 0.1s linear;
    }
`