import { createTheme } from "@material-ui/core";

export const theme = createTheme({
    palette:{
        primary:{
            main:  "#FCBA04",
            contrastText: "#fff" //button text white instead of black
        },
        secondary:{
            main: "#F52F57"
        }
    }
})