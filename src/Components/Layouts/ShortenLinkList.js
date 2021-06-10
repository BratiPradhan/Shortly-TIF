import React from 'react'
import { WrapperShortenLinkList, Items, FullUrl, ShortUrl, Button } from '../StyledComponents/ShortenLinkList.style'

import { useUrl } from '../../urlState/url.context'

export default function ShortenLinkList() {

    const { urls } = useUrl()

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
