import * as React from "react"
import { LinkButton } from "../items/LinkButton"
import { styled } from "styled-components"

export const ButtonList = () => {
    return(
        <Buttons>
            <LinkButton text={"Email"} link={""} hasLink={false}/>
            <LinkButton text={"GitHub"} link={"https://github.com/evanyans"}/>
            <LinkButton text={"LinkedIn"} link={"https://www.linkedin.com/in/yanevan/"}/>
            <LinkButton text={"Resume"} link={"https://github.com/evanyans"}/>
        </Buttons>
    )
}

const Buttons = styled.div`
    display:flex;
    flex-direction:row;
    gap:0.8em;
    margin-bottom:4.38em;
`