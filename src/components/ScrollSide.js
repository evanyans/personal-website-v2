import * as React from "react"
import { styled } from "styled-components"
import { ProjectList } from "./lists/ProjectList"
import { ExpList } from "./lists/ExpList"

export const ScrollSide = () => {
    return(
        <>
            <Wrapper>
                <Info>
                    I’m a designer and engineer with a strong focus on building <Highlight>intuitive</Highlight> and <Highlight>unique</Highlight> web experiences.<br/><br/>
                    Currently, I am working on <HLPurp>Statuni</HLPurp>, a website that crowdsources data from university applicants to display admission statistics across Canada.
                </Info>
                <ProjectList />
                <ExpList/>
            </Wrapper>
        </>
    )
}

const Wrapper = styled.div`
    width: 38.8em;
    margin-left:0em;
    margin-right:3em;
    @media (max-width: 1350px){
        width: auto;
        margin-left:3em;
    }
`

const Info = styled.div`
    font-size: 1.9em;
    font-style: normal;
    font-weight: 500;
    color: ${({theme}) => theme.colors.subtext};
    margin-bottom:8em;

`

const Highlight = styled.mark`
    //background: none;
    //color:${({theme}) => theme.colors.text};
`

const HLPurp = styled.mark`
    background: #EA4EA6;
`