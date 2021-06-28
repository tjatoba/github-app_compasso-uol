import axios from "axios"
import React, { useEffect, useState } from "react"
import { useHistory, useParams } from "react-router-dom"
import { BASE_URL } from "../../constants/url"
import { goToFindUserPage, goToUserReposPage, goToStarredProjectsPage} from "../../routes/coordinator"
import { MainContainer } from "../../styled"
import Button from '@material-ui/core/Button'
import { Header, UserName, ProfileImage, ContainerBio, Name, Bio, DivButtons} from './styled'
import { characterColor } from "../../constants/colors"
import { CircularProgress } from "@material-ui/core"

const ProfileUserPage = () => {

    const history = useHistory()

    const { username } = useParams()
    const [profile, setProfile] = useState({})
    const [starred, setStarred] = useState([])

    useEffect(() => {
        getProfile()
        getStarred()
    }, [])

    const getProfile = async () => {
        try {
            const profile = await axios.get(`${BASE_URL}/${username}`)
            setProfile(profile.data)
        } catch (error) {
            goToFindUserPage(history)
            alert("Este usuário não existe")
        }
    }

    const getStarred = async () => {
        try {
            const starred = await axios.get(`${BASE_URL}/${username}/starred`)
            setStarred(starred.data)
        } catch (error) {
            alert(error.response.data.message)
        }
    }

    return (
        <MainContainer>
            <Header>
                <UserName>
                    GitHub Profile: {profile.login}
                </UserName>
                <Button 
                    onClick={() => goToFindUserPage(history)} 
                    variant={"contained"}
                    color={"primary"} >
                        Back To Search
                    </Button>
            </Header>
                {profile.avatar_url? <ProfileImage src={profile.avatar_url}/> : <CircularProgress color="primary"/>}
            <Name>{profile.name}</Name>
            <ContainerBio>
                <Bio>{profile.bio}</Bio>
            </ContainerBio>
            <DivButtons>
                <Button 
                    onClick={() => goToUserReposPage(history, username)}
                    variant={"outlined"}
                    color={characterColor}> 
                        REPOS {profile.public_repos}
                </Button>
                <Button 
                    onClick={() => goToStarredProjectsPage(history, username)} 
                    variant={"outlined"}
                    color={characterColor}> 
                        STARRED {starred.length} 
                </Button>
            </DivButtons>

        </MainContainer>
    )
}

export default ProfileUserPage