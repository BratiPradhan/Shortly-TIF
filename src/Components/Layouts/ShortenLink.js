import React, { useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import bgShortenDesktop from '../../Images/bg-shorten-desktop.svg'
import bgShortenMobile from '../../Images/bg-shorten-mobile.svg'
import { useUrl } from '../../urlState/url.context'

export default function ShortenLink() {

    const { dispatch } = useUrl()

    const [urlInput, setUrlInput] = useState('');

    const WrapperShortenLink = styled.form`
        grid-column: 2 / -2;
        background-image: url(${bgShortenDesktop}) ;
        background-size: cover;
        height: 20vh;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 0.5rem;

        @media (max-width: 375px){
        background-image: url(${bgShortenMobile}) ;
        width: 100%;
        grid-column: 1 / -2;
        justify-content: space-evenly;
        }
`
const UrlInput = styled.input.attrs({
    type: 'text',
    size: '1rem',
})`
    border: 2px solid ${props => props.theme.primary.cyan};
    border-radius: 0.5rem;
    padding: 1rem;
    margin: 1rem;
    width: 48vw;

    @media (max-width: 375px){
        margin: 0.2rem;
        padding: 0.4rem;
        width: 40vw;
        }
`
const Submit = styled.input.attrs({
    type: "submit",
    size: "1rem",
})`
    padding: 1rem;
    color: white;
    background-color: ${props => props.theme.primary.cyan};
    border: 2px solid ${props => props.theme.primary.cyan};
    border-radius: 0.5rem;
    font-size: ${props => props.theme.fontSize};

    @media (max-width: 375px){
        padding: 0.4rem;
        }
`



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
