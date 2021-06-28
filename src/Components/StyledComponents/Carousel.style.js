import styled from 'styled-components';

export const WrapperCarousel = styled.section `
        grid-column: 2 / -1;
        display: flex;
        justify-content: space-between;
        margin: 2rem 0rem;
        background-color: white;

        @media (max-width: 375px){
            grid-column: 1 / -1;
            flex-direction: column;
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

        @media (max-width: 375px) {
            order: 1 ;
  }
    `

export const CarouselHeading = styled.h1 `
        font-weight: 700;
        font-size: 4.2rem;
        color: ${props => props.theme.neutral.veryDarkViolet};
        padding: 0rem;
        margin: 0rem;

        @media (max-width: 375px){
            font-size: 2rem;
        }
    `



export const CarouselContent = styled.p `
        color: ${props => props.theme.neutral.grayishViolet};
        max-width: 30vw;
        margin: 0;
        

        @media (max-width: 375px){
            font-size: ${props => props.theme.fontSize};
        }
    `

export const CarouselImage = styled.img `
height: 50vh;
flex: 1;
/* align-self: flex-end; */
          @media (max-width: 375px) {
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
    `