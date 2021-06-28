export const goToFindUserPage = (history) => {
    history.push("/")
}

export const goToProfileUserPage = (history, username) => {
    history.push(`/profile/${username}`)
}

export const goToStarredProjectsPage = (history, username) => {
    history.push(`/starred/${username}`)
}

export const goToUserReposPage = (history, username) => {
    history.push(`/repos/${username}`)
}

export const goBack = (history) => {
    history.goBack()
}


