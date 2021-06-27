export const goToFindUserPage = (history) => {
    history.push("/")
}

export const goToProfilePageUser = (history, username) => {
    history.push(`/profile/${username}`)
}

export const goToFollowersPage = (history, username) => {
    history.push(`/followers/${username}`)
}

export const goToFollowingPage = (history, username) => {
    history.push(`/following/${username}`)
}

export const goToStarredProjectsPage = (history, username) => {
    history.push(`/starred/${username}`)
}

export const UserReposPage = (history, username) => {
    history.push(`/repos/${username}`)
}