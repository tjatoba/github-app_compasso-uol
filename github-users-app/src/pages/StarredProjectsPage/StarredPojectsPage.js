import React, { useEffect, useState } from "react"
import axios from "axios"
import { useHistory, useParams } from "react-router-dom"
import { BASE_URL } from "../../constants/url"
import StarredCard from "../../components/StarredCard/StarredCard"
import { MainContainer } from "../../styled"
import { Header, Title } from "./styled"
import Button from '@material-ui/core/Button'
import { goBack } from "../../routes/coordinator"

const StarredPage = () => {
    const { username } = useParams()
    const [starred, setStarred] = useState([])

    const history = useHistory()

    useEffect(() => {
        getStarred()
    }, [])

    const getStarred = async () => {
        try {
            const starred = await axios.get(`${BASE_URL}/${username}/starred`)
            setStarred(starred.data)
        } catch (error) {
            alert(error.response.data.message)
        }
    }

    const starredList = starred && starred.map((starred) => {
        return (
            <StarredCard
                key={starred.id}
                name={starred.name}
                description={starred.description}>
            </StarredCard>
        )
    })
    return (
        <MainContainer>
            <Header>
                <Title>Starred</Title>
                <Button 
                    onClick={() => goBack(history)}
                    variant={"contained"}
                    color={"primary"} >
                        Back
                </Button>
            </Header>
                {starred[0] ? starredList : <Title>STARREDS NOT FOUND</Title>}
        </MainContainer>
    )
}

export default StarredPage