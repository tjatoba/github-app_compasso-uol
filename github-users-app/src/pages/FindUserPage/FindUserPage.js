import React from "react"
import axios from "axios"
import { useHistory } from "react-router-dom"
import useForm from "../../hooks/useForm"
import { goToProfileUserPage } from "../../routes/coordinator"
import { MainContainer } from "../../styled"
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import {InputField, PageTitle} from "./styled"
import { BASE_URL } from "../../constants/url"

const initialForm = {
    username: "",
}

const FindUserPage = () => {

    const history = useHistory()

    const [form, onChange, clear] = useForm(initialForm);
    

    const getProfile = async (e) => {
        e.preventDefault();
        try {
            await axios.get(`${BASE_URL}/${form.username}`)
            goToProfileUserPage(history, form.username)
        } catch (error) {
            alert(error.response.data.message)
            clear()
        }
    }

    return(
        <MainContainer>
            <PageTitle>
                GitHub Search Engine
            </PageTitle>
            <InputField onSubmit = {getProfile}>
                <div>
                <TextField
                    required
                    name={"username"}
                    type={"username"}
                    label={"Find User"}
                    variant={"outlined"}
                    fullWidth
                    margin={"normal"}
                    value={form.username}
                    onChange={onChange}
                />
                </div>
                <Button 
                    variant={"contained"}
                    type={'submit'}
                    color={"primary"}>
                        SEARCH
                </Button>
            </InputField>
        </MainContainer>
    )
}

export default FindUserPage