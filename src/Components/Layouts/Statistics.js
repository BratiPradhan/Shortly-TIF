import React from 'react'
import styled from 'styled-components'
import brandRecognitionIcon from '../../Images/icon-brand-recognition.svg'
import detailedRecordsIcon from '../../Images/icon-detailed-records.svg'
import fullyCustomizableIcon from '../../Images/icon-fully-customizable.svg'

export default function Statistics() {

    const WrapperStatistics = styled.article`
        grid-column: 2 / -2;
        text-align: center;

        @media only screen and (max-width: 375px){
            grid-column: 1 / -2;
        }
        
    `
    const StatisticHeader = styled.h1`
        font-size: 2rem;
        color: ${props => props.theme.neutral.veryDarkViolet};
        font-weight: 700;

        @media only screen and (max-width: 375px){
            font-size: ${props => props.theme.fontSize};
        }
    `
    const StatisticIntro = styled.p`
                font-size: ${props => props.theme.fontSize};
        color: ${props => props.theme.neutral.grayishViolet};
        font-weight: 700;

        @media only screen and (max-width: 375px){
            font-size: 1rem;
        }
    `
    const CardsWrapper = styled.section`
        display: flex;
        justify-content: space-evenly;
        margin: 4rem;

        @media only screen and (max-width: 375px){
            flex-direction: column;
            margin: 0.2rem;
        }
    `

    const Card = styled.section`
    background-color: white;
    padding:  3rem;
    position: relative;
    margin: 1rem;
    `

    const CardHeader = styled.h2`
        font-size: ${props => props.theme.fontSize};
        font-weight: 700;
        color: ${props => props.theme.neutral.veryDarkViolet};
    `

    const CardContent = styled.p`
        font-size: 1rem;
        color: ${props => props.theme.neutral.grayishViolet};
    `

    const CardBadge = styled.img`
        border-radius: 50%;
        position: absolute;
        left: 7rem;
        top: -2rem;
        width: 6vw;
        height:10vh ;
        background-color: ${props => props.theme.primary.darkViolet};
        background-size: contain;

        @media only screen and (max-width: 375px){
            width: 12vw;
            top: -1rem;
        }
    `

    return (
        <WrapperStatistics>
            <section>
                <StatisticHeader>Advanced Statistics</StatisticHeader>
                <StatisticIntro>Track how your links are performing across the web with our advanced statistics dashboard. </StatisticIntro>
            </section>
            <CardsWrapper>
                <Card>
                    <CardHeader>Brand Recognition</CardHeader>
                    <CardContent>Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.</CardContent>
                    <CardBadge src={brandRecognitionIcon} alt="Brand Recognition Icon" />
                </Card>
                <Card>
                    <CardHeader>Detailed Records</CardHeader>
                    <CardContent>Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.</CardContent>
                    <CardBadge src={detailedRecordsIcon} alt="Detailed Records Icon" />
                </Card>
                <Card>
                    <CardHeader>Fully Customizable</CardHeader>
                    <CardContent>Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.</CardContent>
                    <CardBadge src={fullyCustomizableIcon} alt="Fully Customizable Icon" />
                </Card>
            </CardsWrapper>
        </WrapperStatistics>
    )
}
