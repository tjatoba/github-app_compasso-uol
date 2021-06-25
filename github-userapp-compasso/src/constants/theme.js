import { createMuiTheme } from "@material-ui/core/styles";
import { primaryColor, secondaryColor, elementColor, characterColor } from "../constants/colors"


const theme = createMuiTheme({
    palette: {
        primary: {
            main: primaryColor,
            contrastText: elementColor
        },
        secondary: {
            main: secondaryColor,
        },
        text:{
            primary: characterColor
        }
    }
});

export default theme 
