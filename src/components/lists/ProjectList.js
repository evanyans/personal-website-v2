import * as React from "react"
import { styled } from "styled-components"
import { ProjectItem } from "../items/ProjectItem"
import { SubLink } from "../items/SubLink"
import { MobileProjectItem } from "../items/MobileProjectItem"

export const ProjectList = () => {

    return(
        <Wrapper data-section id="projects">
        <Title>PROJECTS</Title>
        <Projects>
            {/* <ProjectItem 
                link="https://www.google.com"
                tech={["React", "Javascript", "MongoDB", "Express", "Node"]}
                pic={0} 
                title="Statuni" 
                desc="Web application that crowdsources data from university applicants to display admission statistics across Canadian universities."/> */}
            <ProjectItem 
                link="https://github.com/evanyans/yelpcamp"
                tech={["JavaScript", "MongoDB", "Express", "Node", "Bootstrap"]}
                pic={0} 
                title="YelpCamp" 
                desc="A full-stack campground site where users can create and review campgrounds. Final project from “The Web Developer Bootcamp” on Udemy."/>
            <ProjectItem 
                link=""
                tech={["React", "Gatsby", "Netlify", "styled-components", "Figma"]}
                pic={1} 
                title="Portfolio Site" 
                desc="Personal website built with Gatsby to maximize performance."/>
            <ProjectItem
                link="https://www.vancouvercharitygames.com/"
                tech={["React", "TypeScript", "styled-components", "Figma"]}
                pic={2} 
                title="Vancouver Charity Games" 
                desc="Complete front-end build for a non-profit organization that provides esports opportunities while raising money for local causes."/>
            <MobileProjectItem 
                link="https://github.com/evanyans/yelpcamp"
                tech={["JavaScript", "MongoDB", "Express", "Node", "Bootstrap"]}
                pic={0} 
                title="YelpCamp" 
                desc="A full-stack campground site where users can create and review campgrounds. Final project from “The Web Developer Bootcamp” on Udemy."/>
            <MobileProjectItem 
                link=""
                tech={["React", "Gatsby", "Netlify", "styled-components", "Figma"]}
                pic={1} 
                title="Portfolio Site" 
                desc="Personal website built with Gatsby to maximize performance."/>
            <MobileProjectItem
                link="https://www.vancouvercharitygames.com/"
                tech={["React", "TypeScript", "styled-components", "Figma"]}
                pic={2} 
                title="Vancouver Charity Games" 
                desc="Complete front-end build for a non-profit organization that provides esports opportunities while raising money for local causes."/>
        </Projects>
        <SubLink link="https://github.com/evanyans" text="View GitHub Profile"/>
        </Wrapper>
        
    )
}

const Wrapper = styled.div`
    padding-bottom:7em;
    padding-top:4em;

    @media (max-width: 1350px){
        padding-bottom:5em;
    }

    @media only screen and (max-width: 768px) {
        padding-bottom:4em;
    }

    @media only screen and (max-width: 600px) {
        padding-bottom:3em;
    }
`

const Title = styled.div`
    font-weight:700;
    font-size:0.8em;

    @media (min-width: 1350px){
        display:none;
    }
`

const Projects = styled.div`
    display:flex;
    flex-direction:column;
    transition: all 2s ease;

    @media (min-width: 1350px){
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
    }


`