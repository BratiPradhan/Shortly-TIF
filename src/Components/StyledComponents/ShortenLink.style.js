import styled from 'styled-components'
import bgShortenDesktop from '../../Images/bg-shorten-desktop.svg'
import bgShortenMobile from '../../Images/bg-shorten-mobile.svg'

export const WrapperShortenLink = styled.article`
grid-column: 2 / -2;
background-image: url(${bgShortenDesktop}) ;
background-color: ${props => props.theme.primary.darkViolet};
background-size: cover;
height: 23vh;
display: flex;
justify-content: space-evenly;
align-items: center;
border-radius: 0.5rem;
font-size: 1rem;

@media only screen and (max-width: 600px){
background-image: url(${bgShortenMobile}) ;
/* width: 100%; */
/* flex-wrap: wrap; */
flex-direction: column;

}
`
export const UrlInput = styled.input.attrs({
type: 'text',
})`
border: 2px solid ${props => props.theme.primary.cyan};
border-radius: 0.5rem;
padding: 1.1rem 1.4rem 0.9rem;
/* margin: 1rem; */
width: 50vw;

::placeholder {
    font-size: 1rem;
    font-weight: 700;
    color: ${props => props.theme.neutral.gray}
}

@media only screen and (max-width: 600px){
width: 70%;
/* flex: 0 0 180px; */
/* margin: 1rem; */

::placeholder {
    font-weight: 500;
}

}
`
export const Submit = styled.button`
padding: 1rem 2rem;
color: white;
background-color: ${props => props.theme.primary.cyan};
border: 2px solid ${props => props.theme.primary.cyan};
border-radius: 0.5rem;
font-size: 1rem;
font-weight: 700;

@media only screen and (max-width: 600px){
/* padding: 0.4rem; */
/* flex: 0 0 180px; */
width: 84%;
/* margin: 1rem; */
}
`