import styled from 'styled-components'
import bgBoostDesktop from '../../Images/bg-boost-desktop.svg'
import bgBoostMobile from '../../Images/bg-boost-mobile.svg'

export const WrapperBoost = styled.section`
        grid-column: 1 / -1;
        background-image: url(${bgBoostDesktop}) ;
        background-color: ${props => props.theme.primary.darkViolet};
        background-size: cover;
        height: 30vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 0.5rem;

        @media only screen and (max-width: 600px) {
            background-image: url(${bgBoostMobile}) ;
  }

    `
    export const BoostHeader = styled.h1`
        font-weight: 700;
        font-size: 2rem;
        color: white;
        margin: 1rem;
        @media only screen and (max-width: 600px) {
            font-size: ${props => props.theme.fontSize};
  }
    `

export const GetStarted = styled.a`
text-decoration: none;
font-size: 1rem;
font-weight: 700;
background-color: ${props => props.theme.primary.cyan};
color: white;
border-radius: 2rem;
padding: 0.8rem 2.15rem;
`