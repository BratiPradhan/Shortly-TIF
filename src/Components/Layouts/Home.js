import Boost from "./Boost";
import Carousel from "./Carousel";
import Footer from "./Footer";
import Navbar from "./Navbar";
import ShortenLink from "./ShortenLink";
import ShortenLinkList from "./ShortenLinkList";
import Statistics from "./Statistics";
import { WrapperGrid } from '../StyledComponents/Home.style'

function Home() {

    

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