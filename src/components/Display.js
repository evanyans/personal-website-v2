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
             <Line/>
                    <Grid>
                        <Header/>
                        <Mid/>
                        <ScrollSide/>  
                    </Grid>
            </App>
        </>
    )
}

const App = styled.div`
    max-width:87em;
    margin-left: auto;
    margin-right:auto;
    margin-top: 5rem;
`


const Grid = styled.div`
    display: flex;
    flex-direction:row;
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

const Mid = styled.div`
    //border-left: 1px solid white;
`