import React, { useState } from 'react'
import axios from 'axios'
import { WrapperShortenLink, UrlInput, Submit } from '../StyledComponents/ShortenLink.style'
import { useUrl } from '../../urlState/url.context'

export default function ShortenLink() {

    const { dispatch } = useUrl()

    const [urlInput, setUrlInput] = useState('');

    



    return (
        <WrapperShortenLink onSubmit={async (e) => {
            e.preventDefault();

            try{
                const data = await axios.get('https://api.shrtco.de/v2/shorten', {
                    params: {
                        url: urlInput
                    }
                });
                dispatch({type: "ADD_URL", payload: data.data.result});
                console.log(data);
                setUrlInput("");
            } catch(err) {
                console.log(err.message);
            }
            }
        }>
            <UrlInput type="text"  name="urlInput" value={urlInput} onChange={(event) => setUrlInput(event.target.value)} />
            <Submit type="submit" value="Shorten it!" />
        </WrapperShortenLink>
    )
}
