import styled from 'styled-components'
import bgShortenDesktop from '../../Images/bg-shorten-desktop.svg'
import bgShortenMobile from '../../Images/bg-shorten-mobile.svg'

export const WrapperShortenLink = styled.form`
grid-column: 2 / -2;
background-image: url(${bgShortenDesktop}) ;
background-color: ${props => props.theme.primary.darkViolet};
background-size: cover;
height: 20vh;
display: flex;
justify-content: center;
align-items: center;
border-radius: 0.5rem;

@media (max-width: 375px){
background-image: url(${bgShortenMobile}) ;
width: 100%;
grid-column: 1 / -2;
justify-content: space-evenly;
}
`
export const UrlInput = styled.input.attrs({
type: 'text',
size: '1rem',
})`
border: 2px solid ${props => props.theme.primary.cyan};
border-radius: 0.5rem;
padding: 1rem;
margin: 1rem;
width: 48vw;

@media (max-width: 375px){
margin: 0.2rem;
padding: 0.4rem;
width: 40vw;
}
`
export const Submit = styled.input.attrs({
type: "submit",
size: "1rem",
})`
padding: 1rem;
color: white;
background-color: ${props => props.theme.primary.cyan};
border: 2px solid ${props => props.theme.primary.cyan};
border-radius: 0.5rem;
font-size: ${props => props.theme.fontSize};

@media (max-width: 375px){
padding: 0.4rem;
}
`