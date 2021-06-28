import React from "react"
import {RepoContainer, RepoTitle, CreatedAt} from "./styled"

const RepoCard = (props) => {
    return (
        <RepoContainer>
            <RepoTitle>{props.repoName}</RepoTitle>
            <CreatedAt>{props.createdAt}</CreatedAt>
        </RepoContainer>
    )
}

export default RepoCard

