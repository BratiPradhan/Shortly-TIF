import Boost from "./Boost";
import Carousel from "./Carousel";
import Footer from "./Footer";
import Navbar from "./Navbar";
import ShortenLink from "./ShortenLink";
import ShortenLinkList from "./ShortenLinkList";
import Statistics from "./Statistics";

function Home() {
    return(
        <div>
            <h1>HOME</h1>
            <Navbar/>
            <Carousel/>
            <ShortenLink/>
            <ShortenLinkList/>
            <Statistics/>
            <Boost/>
            <Footer/>

        </div>
    )
}

export default Home;