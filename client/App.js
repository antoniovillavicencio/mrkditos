import React from 'react'
import MainRouter from './MainRouter'
import {BrowserRouter} from 'react-router-dom'
import {MuiThemeProvider, createMuiTheme} from 'material-ui/styles'
import { blueGrey, lightGreen } from 'material-ui/colors'
import { hot } from 'react-hot-loader'

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    secondary: {
      light: "#FFECB3",
      main: "#FFC107",
      dark: "#FFA000",
      contrastText: "#fafafa"
    },
    primary: {
      light: "#FFCCBC",
      main: "#FF5722",
      dark: "#E64A19",
      contrastText: "#fafafa"
    },
    openTitle: "cb3737",
    protectedTitle: "cb3737",
    type: "light"
  }
});

const App = () => (
  <BrowserRouter>
    <MuiThemeProvider theme={theme}>
      <MainRouter/>
    </MuiThemeProvider>
  </BrowserRouter>
)

export default hot(module)(App)
