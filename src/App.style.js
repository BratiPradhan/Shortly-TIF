import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
body {
  font-family: 'Poppins', sans-serif;
  margin: 0;
}
`

export const theme = {
primary: {
  cyan: "#2acfcf",
  darkViolet: "#3b3054"
},
secondary: {
  red: "#f46262"
},
neutral: {
  gray: "#bfbfbf",
  lightGray: "#F3F4F6",
  grayishViolet: "#9e9aa7",
  veryDarkBlue: "#35323e",
  veryDarkViolet: "#232127"
},
fontSize: "1.2rem"
}