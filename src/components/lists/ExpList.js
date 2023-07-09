import * as React from "react"
import { styled } from "styled-components"
import { ExpItem } from "../items/ExpItem"

export const ExpList = () => {

    return(
        <Exp>
            <ExpItem 
            link={"https://www.firstinspires.org/"}
            tech={["Java", "Android SDK", "Python", "TensorFlow"]} 
            title="Software Developer • FTC Robotics Team" 
            desc="Collaborated with a multidisciplinary team to design, implement, and test software solutions for robotic control and automation. Two-time provincial champions, and 1 of 4 teams in British Columbia to ever be awarded at the FIRST World Championships in Houston, Texas."/>
        </Exp>
    )
}

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