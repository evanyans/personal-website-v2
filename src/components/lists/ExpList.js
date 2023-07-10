import * as React from "react"
import { styled } from "styled-components"
import { ExpItem } from "../items/ExpItem"
import { SubLink } from "../items/SubLink"

export const ExpList = () => {

    return(
        <Wrapper>
        <Exp>
            <ExpItem 
            link={"https://ftc-events.firstinspires.org/team/16031"}
            tech={["Java", "Android SDK", "Python", "TensorFlow"]} 
            title="Software Developer • FTC Robotics Team" 
            desc="Collaborated with a multidisciplinary team to design, implement, and test software solutions for robotic control and automation. Two-time provincial champions, and 1 of 4 teams in British Columbia to ever be awarded at the FIRST World Championships in Houston, Texas."/>
        </Exp>
        <SubLink link="" text="View Full Resume"/>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    margin-bottom:11em;
`

const Exp = styled.div`
    display:flex;
    flex-direction:column;
    transition: all 2s ease;
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