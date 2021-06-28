import styled from "styled-components"
import { characterColor, elementColor } from "../../constants/colors"

export const Header = styled.header`
    width: 95%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    @media screen and (min-width: 300px) and (max-width: 420px) {
            flex-direction: column;
            margin-bottom: 10px;
`
export const UserName = styled.h2`
    color: ${elementColor};
    display: flex;
    justify-content: center;
    padding: 10px;
    font-family: Roboto, 'Open Sans', 'Helvetica Neue', sans-serif;
    letter-spacing: 10px;
    @media screen and (min-width: 300px) and (max-width: 420px) {
            letter-spacing: normal
    }
`
export const ProfileImage = styled.img`
    width: 300px;
    border-radius: 50%;
`
export const ContainerBio = styled.div`
    display: flex;
    width: 90%;
    justify-content: center;
    align-items: center;
`
export const Name = styled.h2`
    letter-spacing: 2px;
    color: ${characterColor};
    font-family: Roboto, 'Open Sans', 'Helvetica Neue', sans-serif;
`
export const Bio = styled.h4`
    color: white;
    font-family: Roboto, 'Open Sans', 'Helvetica Neue', sans-serif;
`
export const DivButtons = styled.div`
    display: flex;
    gap: 10px;
        @media screen and (min-width: 300px) and (max-width: 420px) {
                flex-direction: column;
                gap: 15px;
                margin-bottom: 15px;
        }
`
export const DivFollow = styled.div`
    width: 60%;
    display: flex;
    justify-content: space-evenly;
`