import React from 'react'
import styled, {css} from 'styled-components'
import { useUrl } from '../../urlState/url.context'

export default function ShortenLinkList() {

    const { urls } = useUrl()

    const WrapperShortenLinkList = styled.ul`
        grid-column: 2 / -2;
        display: flex;
        flex-direction: column;
    `
    const Items = styled.li`
        margin: 1rem;
        display: flex;
        background-color: white;
        justify-content: space-between;
    `

const Button = styled.button`
background: ${props => props.theme.primary.cyan};
border-radius: 3px;
border: 2px solid ${props => props.theme.primary.cyan};
color: white;
margin: 0.5rem 1rem;
padding: 0.25rem 1rem;
width: 8vw;

${props => props.copied && css`
    background: ${props => props.theme.neutral.veryDarkViolet};
    border: 2px solid ${props => props.theme.neutral.veryDarkViolet};
    color: white;
  `}

`

const FullUrl = styled.p`
color: ${props => props.theme.neutral.veryDarkViolet};
`
const ShortUrl = styled.p`
color: ${props => props.theme.primary.cyan};

`

    return (
        <WrapperShortenLinkList> 
            {
                urls.map(url => <Items>
                    <FullUrl>{url.original_link}</FullUrl>
                    <ShortUrl>{url.full_short_link}</ShortUrl>
                    <Button>Copy</Button>
                </Items>)
            }
            <Items>
                <FullUrl>https://www.frontendmentor.io</FullUrl>
                <ShortUrl>https://relink/k4lkyk</ShortUrl>
                <Button>Copy</Button>
            </Items>
            <Items>
                <FullUrl>https://www.frontendmentor.io</FullUrl>
                <ShortUrl>https://relink/k4lkyk</ShortUrl>
                <Button copied>Copied</Button>
            </Items>
        </WrapperShortenLinkList>
    )
}
