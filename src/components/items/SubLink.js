import * as React from "react"
import { useState } from "react"
import { styled } from "styled-components"

export const SubLink = ({text = "View GitHub Profile", link="https://www.google.com"}) => {
    const [active, setActive] = useState(false)
    return(
        <Wrapper>
            <Link href={link} target="_blank" onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)}>{text}</Link>
            <Arrow style={active ? {marginLeft: '0.6em'} : {marginLeft: '0'}}>&nbsp;→</Arrow>
        </Wrapper>
    )
}

const Wrapper = styled.div`
display:flex;
flex-direction:row;
padding-left:2em;

@media (max-width: 1350px){
    padding-left:0;
}
`

const Link = styled.a`
    text-decoration: none;
    color: ${({theme}) => theme.colors.text};
    font-weight:500;
    font-size:1em;
    position: relative;
    text-decoration:none;
    padding-bottom:0.125em;

    &:after{

    content: '';
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: ${({theme}) => theme.colors.underline};
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
      }
      &:hover:after {
        transform: scaleX(1);
        transform-origin: bottom left;
      }
`

const Arrow = styled.div`
      transition: all 0.1s ease;
`