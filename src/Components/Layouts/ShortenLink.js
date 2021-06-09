import React from 'react'
import styled from 'styled-components'
import bgShortenDesktop from '../../Images/bg-shorten-desktop.svg'
import bgShortenMobile from '../../Images/bg-shorten-mobile.svg'

export default function ShortenLink() {

    const WrapperShortenLink = styled.form`
        grid-column: 2 / -2;
        background-image: url(${bgShortenDesktop}) ;
        background-size: cover;
        width: 72vw;
        height: 20vh;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 0.5rem;
`
const Input = styled.input.attrs({
    type: "text",
    size: "1rem",
})`
    border: 2px solid ${props => props.theme.primary.cyan};
    border-radius: 0.5rem;
    padding: 1rem;
    margin: 1rem;
    width: 48vw;
`
const Button = styled.button.attrs({
    size: "1rem",
})`
    padding: 1rem;
    color: white;
    background-color: ${props => props.theme.primary.cyan};
    border: 2px solid ${props => props.theme.primary.cyan};
    border-radius: 0.5rem;
    font-size: ${props => props.theme.fontSize};
`



    return (
        <WrapperShortenLink>
            <Input type="text" />
            <Button>Shorten it!</Button>
        </WrapperShortenLink>
    )
}
