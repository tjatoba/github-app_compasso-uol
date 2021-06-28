import React from "react"
import { MainContainer} from "../../styled"
import errorcat from "../../assets/githuberror.png"
import { ErrorImg, Link} from "./styled"
//import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";
import { goToFindUserPage } from "../../routes/coordinator";
import { CircularProgress } from "@material-ui/core"
import { elementColor } from "../../constants/colors";

const ErrorPage = () => {

    const history = useHistory()

    return(
        <MainContainer>
            <Link 
                type={"submit"} 
                variant={"text"}
                color={elementColor} 
                onClick={() => goToFindUserPage(history)}>
                    BACK TO SEARCH
            </Link>
                {errorcat? <ErrorImg src={errorcat}/> : <CircularProgress color={"primary"}/>}
        </MainContainer>
    )
}

export default ErrorPage