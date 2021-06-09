import styled from 'styled-components'

import Boost from "./Boost";
import Carousel from "./Carousel";
import Footer from "./Footer";
import Navbar from "./Navbar";
import ShortenLink from "./ShortenLink";
import ShortenLinkList from "./ShortenLinkList";
import Statistics from "./Statistics";

function Home() {

    const WrapperGrid = styled.article`
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-auto-rows: auto;
    font-size: ${props => props.theme.fontSize};
    `

    return(
        <WrapperGrid>
            <Navbar/>
            <Carousel/>
            <ShortenLink/>
            <ShortenLinkList/>
            <Statistics/>
            <Boost/>
            <Footer/>
        </WrapperGrid>
    )
}

export default Home;