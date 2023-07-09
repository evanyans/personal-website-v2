import * as React from "react"
import { styled } from "styled-components"

export const TechButton = ({tech}) => {
    return(
        <Tech>{tech}</Tech>
    )

}

const Tech = styled.div`
    background-color:${({theme}) => theme.colors.button};
    color: ${({theme}) => theme.colors.text};
    padding: 0.5em 1.1em;
    font-size:0.8em;
    border-radius:2em;
    font-weight:400;
    text-decoration: none;
`