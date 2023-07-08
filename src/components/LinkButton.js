import * as React from "react"
import { styled } from "styled-components"

export const LinkButton = ({text = "Default", link = "www.google.com"}) => {
    return(
        <Button href={link} target="_blank">{text}</Button>
    )
}

const Button = styled.a`
    user-select:none;
    background-color:${({theme}) => theme.colors.button};
    color: ${({theme}) => theme.colors.text};
    padding: 0.5em 1.18em;
    font-size:1em;
    border-radius:2em;
    font-weight:500;
    text-decoration: none;
    &:hover {
        background-color: ${({theme}) => theme.colors.buttonHover};
    }
`