import { Home } from './Components'
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { UrlProvider } from './urlState/url.context';


function App() {

  const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,500;0,700;1,500;1,700&display=swap');
  body {
    font-family: 'Poppins', sans-serif;
  }
`

const theme = {
  primary: {
    cyan: "#2acfcf",
    darkViolet: "#3b3054"
  },
  secondary: {
    red: "#f46262"
  },
  neutral: {
    gray: "#bfbfbf",
    lighGray: "#F3F4F6",
    grayishViolet: "#9e9aa7",
    veryDarkBlue: "#35323e",
    veryDarkViolet: "#232127"
  },
  fontSize: "1.2rem"
}

  return (
    <div>
      <UrlProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyles/>
          <Home/>
        </ThemeProvider>
        </UrlProvider>
    </div>
  );
}

export default App;
