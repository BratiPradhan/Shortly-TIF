import React from 'react'
import styled from 'styled-components'
import carouselImage from '../../Images/illustration-working.svg'

export default function Carousel() {

    const WrapperCarousel = styled.section`
        grid-column: 2 / -1;
        display: flex;
        justify-content: space-between;
        margin: 1rem;
        background-color: white;

        @media (max-width: 375px){
            grid-column: 1 / -1;
            flex-direction: column;
        }
    `

    const CarouselText = styled.section`
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;

        @media (max-width: 375px) {
            order: 1 ;
  }
    `

    const CarouselHeading = styled.h1`
        font-weight: 700;
        font-size: 4rem;
        color: ${props => props.theme.neutral.veryDarkViolet};

        @media (max-width: 375px){
            font-size: 2rem;
        }
    `

    const CarouselContent = styled.p`
        color: ${props => props.theme.neutral.grayishViolet};
        font-size: 1.6rem;

        @media (max-width: 375px){
            font-size: ${props => props.theme.fontSize};
        }
    `

    const CarouselImage = styled.img`
          @media (max-width: 375px) {
            order: 0 ;
            height: 40vh;
  }
    `

    const GetStarted = styled.a`
        text-decoration: none;
        font-size: 2rem;
        background-color: ${props => props.theme.primary.cyan};
        color: white;
        border-radius: 1rem;
        padding: 1rem;
        align-self: flex-start;
        justify-self: center;
    `

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
