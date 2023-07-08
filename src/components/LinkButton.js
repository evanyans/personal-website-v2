import * as React from "react"
import { useState } from "react";
import { styled } from "styled-components"

export const LinkButton = ({text = "Default", link = "www.google.com", hasLink = true}) => {
    const [copy, setCopy] = useState(false);
    const [option, setOption] = useState(true);
    const [view, setView] = useState(false);

    const CopyToClipboard = () => {
        navigator.clipboard.writeText("evanyans@gmail.com")
        setOption(false)
        setCopy(true)
        setTimeout(() => {
            setOption(true)
            setCopy(false)
        }, 2000)
    }

    if (hasLink) {
        return( 
            <Button href={link} target="_blank"> 
                {text}
            </Button>
        )
    } 
    return( 
        <Button onClick={CopyToClipboard} onMouseEnter={() => (setView(true))} onMouseLeave={() => (setView(false))}> 
            {text}
            {view && copy && <Popupv2>Copied!</Popupv2>}
            {view && option && <Popup>Click to copy</Popup>}
        </Button>
    )


}

const Button = styled.a`
    user-select:none;
    cursor: pointer;
    display:inline-block;
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

const Popup = styled.span`
    pointer-events: none;
    font-weight:400;
    cursor: default;
    width: 7.5em;
    background-color: ${({theme}) => theme.colors.text};
    color: ${({theme}) => theme.colors.background};
    text-align: center;
    border-radius: 0.6em;
    padding: 8px 0;
    position: absolute;
    z-index: 1;
    margin-left:-59px;
    margin-top:1.9em;

    &:after {
        content: "";
        position: absolute;
        top: -27%;
        left: 50%;
        margin-left: -25px;
        border-width: 5px;
        border-style: solid;
        border-color: transparent transparent ${({theme}) => theme.colors.text} transparent;
    }
`
const Popupv2 = styled.span`
    pointer-events: none;

    font-weight:400;
    cursor: default;
    width: 5em;
    background-color: ${({theme}) => theme.colors.text};
    color: ${({theme}) => theme.colors.background};
    text-align: center;
    border-radius: 0.6em;
    padding: 8px 0;
    position: absolute;
    z-index: 2;
    margin-left:-59px;
    margin-top:1.9em;

    &:after {
        content: "";
        position: absolute;
        top: -27%;
        left: 50%;
        margin-left: -5px;
        border-width: 5px;
        border-style: solid;
        border-color: transparent transparent ${({theme}) => theme.colors.text} transparent;
    }
`