import { Home } from './Components'
import { ThemeProvider } from "styled-components";
import { GlobalStyles, theme } from './App.style'
import { UrlProvider } from './urlState/url.context';


function App() {

  

  return (
    <div>
        <ThemeProvider theme={theme}>
          <UrlProvider>
            <GlobalStyles/>
            <Home/>
          </UrlProvider>
        </ThemeProvider>

    </div>
  );
}

export default App;
