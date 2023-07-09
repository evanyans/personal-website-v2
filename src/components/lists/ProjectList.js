import * as React from "react"
import { styled } from "styled-components"
import { ProjectItem } from "../items/ProjectItem"

export const ProjectList = () => {

    return(
        <Projects>
            <ProjectItem title="YelpCamp" desc="A campground site where users can create and review campgrounds. Final project from “The Web Developer Bootcamp” on Udemy."/>
        </Projects>
    )
}

const Projects = styled.div`
    display:flex;
    flex-direction:column;
`