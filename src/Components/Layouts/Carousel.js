import React from 'react'
import { WrapperCarousel, CarouselHeading, CarouselContent, CarouselImage, CarouselText, GetStarted } from '../StyledComponents/Carousel.style'
import carouselImage from '../../Images/illustration-working.svg'

export default function Carousel() {

    

    return (
        <WrapperCarousel>
            <CarouselText>
                <CarouselHeading>More than just shorter links</CarouselHeading>
                <CarouselContent>Build your brand's recognition and get detailed insights on how your links are performing.</CarouselContent>
                <GetStarted href="/src/Components/Layouts/Home.js">Get Started</GetStarted>
            </CarouselText>
            <CarouselImage src={carouselImage} alt="Carousel Illustration"/>
        </WrapperCarousel>
    )
}
