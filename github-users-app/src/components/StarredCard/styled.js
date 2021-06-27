import styled from 'styled-components'
import { elementColor, primaryColor} from '../../constants/colors'

export const StarredContainer = styled.div`
    display:flex;
    flex-direction: column;
    width: 70%;
    border-radius: 6px;
    margin-top: 20px;
    background-color: ${primaryColor};
    border: 1px solid white;
    padding: 5px 20px;
    font-family: Roboto, 'Open Sans', 'Helvetica Neue', sans-serif;
`
export const Title = styled.h2`
color: ${elementColor};
font-family: Roboto, 'Open Sans', 'Helvetica Neue', sans-serif;
`
export const Description = styled.h4`
color: ${elementColor};
font-family: Roboto, 'Open Sans', 'Helvetica Neue', sans-serif;
`