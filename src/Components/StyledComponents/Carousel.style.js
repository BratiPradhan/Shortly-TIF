import styled from 'styled-components';

export const WrapperCarousel = styled.section `
        grid-column: 2 / -1;
        display: flex;
        justify-content: space-between;
        margin: 2rem 0rem;
        background-color: white;

        @media only screen and (max-width: 600px){
            /* grid-column: 1 / -1; */
            flex-direction: column;
            max-height: 100vh;
        }
    `

export const CarouselText = styled.section `
flex: 1 ;
/* align-self: flex-start; */
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        /* padding: 0; */
        font-size: 1rem;

        @media only screen and (max-width: 600px) {
            order: 1 ;
            max-width: 400px;
            margin: auto;
            text-align: center;
  }
    `

export const CarouselHeading = styled.h1 `
        font-weight: 700;
        font-size: 4.2rem;
        color: ${props => props.theme.neutral.veryDarkViolet};
        padding: 0rem;
        margin: 0rem;

        @media only screen and (max-width: 600px){
            font-size: 2.4rem;
        }
    `



export const CarouselContent = styled.p `
        color: ${props => props.theme.neutral.grayishViolet};
        max-width: 30vw;
        margin: 0;
        

        @media only screen and (max-width: 600px){
            font-size: 1rem;
            max-width: 400px;
        }
    `

export const CarouselImage = styled.img `
height: 50vh;
flex: 1;
/* align-self: flex-end; */
@media only screen and (max-width: 600px) {
            order: 0 ;
            height: 40vh;
}
    `

export const GetStarted = styled.a `
        text-decoration: none;
        background-color: ${props => props.theme.primary.cyan};
        color: white;
        border-radius: 2rem;
        padding: 0.8rem 2.1rem;
        margin: 2rem 0rem;
        align-self: flex-start;
        /* justify-self: flex-end; */
        font-weight: 700;
        @media only screen and (max-width: 600px) {
            margin: 2rem auto;
}
    `