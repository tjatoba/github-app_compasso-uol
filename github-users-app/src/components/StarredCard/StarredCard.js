import React from "react"
import {StarredContainer, StarredTitle, Description} from "./styled"

const StarredCard = (props) => {
    return (
        <StarredContainer>
            <StarredTitle>{props.name}</StarredTitle>
            <Description>{props.description}</Description>
        </StarredContainer>
    )
}

export default StarredCard