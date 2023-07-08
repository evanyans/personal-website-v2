import * as React from "react"
import { styled } from "styled-components"

export const ScrollSide = () => {
    return(
        <>
            <Wrapper>
                <Info>
                    I’m a designer and engineer with a strong focus on building <Highlight>intuitive</Highlight> and <Highlight>unique</Highlight> web experiences.<br/><br/>
                    Currently, I am working on Statuni, a website that crowdsources data from university applicants to display admission statistics across Canada.
                    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                </Info>
            </Wrapper>
        </>
    )
}

const Wrapper = styled.div`
    width: 44em;
    padding-left:6em;
    padding-right:6em;

`

const Info = styled.div`
    font-size: 1.9em;
    font-style: normal;
    font-weight: 500;
    color: ${({theme}) => theme.colors.subtext};
`

const Highlight = styled.mark`
    //background: none;
    //color:${({theme}) => theme.colors.text};
`