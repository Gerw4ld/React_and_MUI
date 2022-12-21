import Cards from "./components/Cards";
import {createTheme, ThemeProvider} from "@mui/material";
import {pink} from "@mui/material/colors";

// https://mui.com/material-ui/customization/default-theme/
const theme = createTheme({
    palette:{
        secondary: pink
    }
})

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Cards/>
        </ThemeProvider>
    );
}

export default App;
