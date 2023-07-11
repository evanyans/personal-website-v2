import * as React from "react"
import { styled } from "styled-components"

export const Navigator = () => {
    return (
        <Wrapper>
            <Nav>
                <NavLink href="#about">about</NavLink>
                <NavLink href="#projects">projects</NavLink>
                <NavLink href="#experience">experience</NavLink>
            </Nav>
        </Wrapper>
    )
}

const Wrapper = styled.div`
`

const Nav = styled.div`
    display:flex;
    flex-direction:column;
`

const NavLink = styled.a`
    text-decoration:none;
    color:#595959;
    font-size:1.5em;
    padding-left: 1.12em;
    padding-top:0.125em;
    padding-bottom:0.125em;
`