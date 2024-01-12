import * as React from "react"
import { styled } from "styled-components"
import { ExpItem } from "../items/ExpItem"
import { SubLink } from "../items/SubLink"
import { MobileExpItem } from "../items/MobileExpItem"

export const ExpList = () => {

    return(
        <Wrapper data-section id="experience">
            <Title>EXPERIENCE</Title>
            <Exp>
                <ExpItem 
                link={"https://ftc-events.firstinspires.org/team/16031"}
                tech={["Java", "Android SDK", "Python", "TensorFlow"]} 
                title="Software Developer • FTC Robotics Team" 
                desc="Collaborated with a multidisciplinary team to design, implement, and test software solutions for robotic control and automation. Two-time provincial champions, and 1 of 2 FTC teams in British Columbia to ever be awarded at the FIRST World Championships in Houston, Texas."
                year="2019-2023"/>
                <MobileExpItem
                link={"https://ftc-events.firstinspires.org/team/16031"}
                tech={["Java", "Android SDK", "Python", "TensorFlow"]} 
                title="Software Developer • FTC Robotics Team" 
                desc="Collaborated with a multidisciplinary team to design, implement, and test software solutions for robotic control and automation. Two-time provincial champions, and 1 of 2 FTC teams in British Columbia to ever be awarded at the FIRST World Championships in Houston, Texas."
                year="2019-2023"/>
                <ExpItem 
                link={"https://www.behance.net/evanyan"}
                tech={["Figma", "Adobe Photoshop", "Adobe Illustrator"]} 
                title="UI/UX Designer • Freelance" 
                desc="Designed landing pages for non-profits and mural art for public schools."
                year="2021-Present"/>
                <MobileExpItem 
                link={"https://www.behance.net/evanyan"}
                tech={["Figma", "Adobe Photoshop", "Adobe Illustrator"]} 
                title="UI/UX Designer • Freelance" 
                desc="Designed landing pages for non-profits and mural art for public schools."
                year="2021-Present"/>
            </Exp>
        <SubLink link="https://www.linkedin.com/in/yanevan/" text="View LinkedIn Page"/>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    margin-bottom:28em;
    padding-top:4em;
    @media (max-width: 1350px){
        margin-bottom:14em;
    }
    @media only screen and (max-width: 768px) {
        margin-bottom:10em
    }

    @media only screen and (max-width: 600px) {
        margin-bottom:6em;
    }
`

const Title = styled.div`
    font-weight:700;
    font-size:0.8em;

    @media (min-width: 1350px){
        display:none;
    }
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