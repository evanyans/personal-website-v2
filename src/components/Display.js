import * as React from "react"
import { NavBar } from "./NavBar"
import { styled } from "styled-components"
import { ScrollSide } from "./ScrollSide"

export const Display = () => {
    return(
        <>
            <App>
                    <Grid>
                        <NavBar/>
                        <Line/>
                        <ScrollSide/>  
                    </Grid>
            </App>
        </>
    )
}

const App = styled.div`
    max-width: 88rem;
    margin-left: auto;
    margin-right: auto;
    margin-top: 5rem;
`


const Grid = styled.div`
    display: flex;
    flex-direction:row;
    align-content: center;
    justify-content: center;
`

const Line = styled.div`
    border-left: 1px solid #424245;
    height:2000px;
    position:fixed;
    left:50%;
    top:-10%;
    
`
