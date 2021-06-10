import { Home } from './Components'
import { ThemeProvider } from "styled-components";
import { GlobalStyles, theme } from './App.style'
import { UrlProvider } from './urlState/url.context';


function App() {

  

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
