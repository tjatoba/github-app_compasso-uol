import styled from 'styled-components'
import Toolbar from '@material-ui/core/Toolbar';

export const StyledToolbar = styled(Toolbar)`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
        @media screen and (min-width: 300px) and (max-width: 420px) {
            padding:10px;
        }
`
export const LogoImg = styled.img`
    height: 55px;
        @media screen and (min-width: 300px) and (max-width: 420px) {
            padding: 10px;
        }
`