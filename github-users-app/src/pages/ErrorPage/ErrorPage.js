import React from "react"
import { MainContainer} from "../../styled"
import errorcat from "../../assets/githuberror.png"
import { ErrorImg } from "./styled"
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";
import { goToFindUserPage } from "../../routes/coordinator";
import { CircularProgress } from "@material-ui/core"

const ErrorPage = () => {

    const history = useHistory()

    return(
        <MainContainer>
            {errorcat? <ErrorImg src={errorcat}/> :  <CircularProgress color="primary"/>}
            <Button type="submit" variant="contained" color="primary" onClick={() => goToFindUserPage(history)}>BACK TO SEARCH PAGE</Button>
        </MainContainer>
    )
}

export default ErrorPage