import styled from 'styled-components'
import { characterColor } from '../../constants/colors'

export const PageTitle = styled.h1`
    color: ${characterColor};
    display: flex;
    justify-content: center;
    padding: 50px;
    font-family: Roboto, 'Open Sans', 'Helvetica Neue', sans-serif;
    word-spacing: 25px;
    letter-spacing: 10px;
`

export const InputField = styled.form`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
`

