import * as React from "react"
import { NavBar } from "./NavBar"
import { styled } from "styled-components"
import { ScrollSide } from "./ScrollSide"
import { Header } from "./Header"

export const Display = () => {
    return(
        <>
            <App>
             <NavBar/>
                    <Grid>
                        <Header/>
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
    
    @media (max-width: 1350px){
        flex-direction:column;
    }
`

const Line = styled.div`
    border-left: 1px solid #424245;
    height:2000px;
    position:fixed;
    left:50%;
    top:-10%;

    @media (max-width: 1350px){
        display:none;
    }
`