import * as React from "react"
import { styled } from "styled-components"
import { TechButton } from "../items/TechButton"

export const TechList = ({tech}) => {
    return(
        <List>
            {tech.map((t) => (
                <TechButton key={t} tech={t}/>
            ))}

        </List>
    )

}

const List = styled.div`
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    gap:0.25em;

`