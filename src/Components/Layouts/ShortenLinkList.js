import React, {useEffect} from 'react'
import { uuid } from 'uuidv4';
import { WrapperShortenLinkList, Items, FullUrl, ShortUrl, Button } from '../StyledComponents/ShortenLinkList.style'

import { useUrl } from '../../urlState/url.context'

export default function ShortenLinkList() {

    const { urls } = useUrl()

    useEffect(() => {
        localStorage.setItem('urls', JSON.stringify(urls));
    }, [urls])

    return (
        <WrapperShortenLinkList> 
            {
                urls.map(url => <Items key={uuid()}>
                    <FullUrl>{url.key}</FullUrl>
                    <ShortUrl>{url.value}</ShortUrl>
                    <Button onClick={() =>  navigator.clipboard.writeText(url.value)}>Copy</Button>
                </Items>)
            }
        </WrapperShortenLinkList>
    )
}

