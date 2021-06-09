import React from 'react'
import styled from 'styled-components'
import bgBoostDesktop from '../../Images/bg-boost-desktop.svg'
import bgBoostMobile from '../../Images/bg-boost-mobile.svg'

export default function Boost() {

    const WrapperBoost = styled.section`
        grid-column: 1 / -1;
        background-image: url(${bgBoostDesktop}) ;
        background-size: cover;
        height: 32vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-radius: 0.5rem;
        padding: 0.5rem;

    `
    const BoostHeader = styled.h1`
        font-weight: 700;
        font-size: 2rem;
color: ${props => props.theme.primary.darkViolet};
    `

const GetStarted = styled.a`
text-decoration: none;
font-size: ${props => props.theme.fontSize};
background-color: ${props => props.theme.primary.cyan};
color: white;
border-radius: 1rem;
padding: 1rem;
`

    return (
        <WrapperBoost>
            <BoostHeader>Boost your links today</BoostHeader>
            <GetStarted href="/">Get Started</GetStarted>
        </WrapperBoost>
    )
}
