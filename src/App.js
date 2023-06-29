// Theme
import { ColorModeContext, useMode } from "./theme";

// MUI
import { CssBaseline, ThemeProvider } from "@mui/material";

// Components
// import Topbar from "./global/Topbar";
import Topbar from "./scenes/global/Topbar";

function App() {
    const [theme, colorMode] = useMode();
    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <div className="app">
                    <main className="content">
                        <Topbar />
                    </main>
                </div>
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}

export default App;
