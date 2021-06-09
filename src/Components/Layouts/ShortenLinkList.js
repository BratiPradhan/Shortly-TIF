import React from 'react'
import styled from 'styled-components'

export default function ShortenLinkList() {

    const WrapperShortenLinkList = styled.ul`
        grid-column: 2 / -2;
    `

    return (
        <WrapperShortenLinkList>
            <li>
                <p>https://www.frontendmentor.io</p>
                <p>https://relink/k4lkyk</p>
                <button>Copy</button>
            </li>
        </WrapperShortenLinkList>
    )
}
