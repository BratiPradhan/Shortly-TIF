import React, { useState } from 'react'
import axios from 'axios'
import { WrapperShortenLink, UrlInput, Submit } from '../StyledComponents/ShortenLink.style'
import { useUrl } from '../../urlState/url.context'

export default function ShortenLink() {

    const { dispatch } = useUrl()

    const [urlInput, setUrlInput] = useState('');

    
        const changeLink = (e) => {
            setUrlInput(e.target.value);
        }

        const submitLink = async () => {
            try{
                const data = await axios.get(`https://api.shrtco.de/v2/shorten?url=${urlInput}`);
                dispatch({type: "ADD_URL", payload: {key: urlInput, value: data.data.result.full_short_link}});
                setUrlInput("");
            } catch(err) {
                console.log(err.message);
            }
        }

    return (
        <WrapperShortenLink>
            <UrlInput type="text"  name="urlInput" value={urlInput} placeholder="Shorten a link here..." onChange={changeLink} />
            <Submit onClick={submitLink}>Shorten It!</Submit>
        </WrapperShortenLink>
    )
}

