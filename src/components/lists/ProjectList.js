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
                link="https://github.com/evanyans/tina"
                tech={["React", "Python", "Next.js", "Django", "News API", "FinBERT NLP Model", "Tailwind CSS"]}
                pic={5} 
                title="Tina" 
                desc="An investment tool that aggregates and analyzes news headlines to deliver sentiment insights."/>
            <ProjectItem 
                link="https://github.com/evanyans/spotify-uncovered"
                tech={["React", "Express", "Spotify API", "Node", "styled-components"]}
                pic={3} 
                title="Spotify Uncovered" 
                desc="Web app for creating playlists based on your mood and taste using personalized Spotify data. Analyzes audio information from all tracks of your top artists to generate a new playlist based on your specified mood."/>
            <ProjectItem 
                link="https://devpost.com/software/papers-please-clone"
                tech={["Godot Game Engine", "Aseprite", "GDScript", "Audacity"]}
                pic={4} 
                title="Credit Crimes" 
                desc="HackWestern 2023 Finalist (Top 5 Overall) & Best Game Hack: A game blending mystery, intrigue, and tax fraud detection. Analyze documents, scrutinize social media, and make an accurate decision before time runs out!"/>
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
            <MobileProjectItem 
                link="https://github.com/evanyans/tina"
                tech={["React", "Python", "Next.js", "Django", "News API", "FinBERT NLP Model", "Tailwind CSS"]}
                pic={5} 
                title="Tina" 
                desc="An investment tool that aggregates and analyzes news headlines to deliver sentiment insights."/>
            <MobileProjectItem 
                link="https://github.com/evanyans/spotify-uncovered"
                tech={["React", "Express", "Spotify API", "Node", "styled-components"]}
                pic={3} 
                title="Spotify Uncovered" 
                desc="Web app for creating playlists based on your mood and taste using personalized Spotify data. Analyzes audio information from all tracks of your top artists to generate a new playlist based on your specified mood."/>
            <MobileProjectItem 
                link="https://devpost.com/software/papers-please-clone"
                tech={["Godot Game Engine", "C#", "GDScript"]}
                pic={4} 
                title="Credit Crimes" 
                desc="HackWestern 2023 Finalist (Top 5 Overall) & Best Game Hack: A game blending mystery, intrigue, and tax fraud detection. Analyze documents, scrutinize social media, and make an accurate decision before time runs out!"/>
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