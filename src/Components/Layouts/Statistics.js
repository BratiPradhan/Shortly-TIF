import React from 'react'
import { WrapperStatistics, StatisticHeader, StatisticIntro, CardBrandRecognition, CardDetailedRecord, CardFullyCustomizable, CardBadgeWrapper, CardBadge, CardContent, CardHeader, CardsWrapper } from '../StyledComponents/Statistic.style'
import brandRecognitionIcon from '../../Images/icon-brand-recognition.svg'
import detailedRecordsIcon from '../../Images/icon-detailed-records.svg'
import fullyCustomizableIcon from '../../Images/icon-fully-customizable.svg'

export default function Statistics() {

    

    return (
        <WrapperStatistics>
            <section>
                <StatisticHeader>Advanced Statistics</StatisticHeader>
                <StatisticIntro>Track how your links are performing across the web with our advanced statistics dashboard. </StatisticIntro>
            </section>
            <CardsWrapper>
                <CardBrandRecognition>
                    <CardHeader>Brand Recognition</CardHeader>
                    <CardContent>Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.</CardContent>

                    <CardBadgeWrapper>
                        <CardBadge src={brandRecognitionIcon} alt="Brand Recognition Icon" />
                    </CardBadgeWrapper>
                </CardBrandRecognition>
                <CardDetailedRecord>
                    <CardHeader>Detailed Records</CardHeader>
                    <CardContent>Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.</CardContent>

                    <CardBadgeWrapper>
                        <CardBadge src={detailedRecordsIcon} alt="Detailed Records Icon" />
                    </CardBadgeWrapper>
                </CardDetailedRecord>
                <CardFullyCustomizable>
                    <CardHeader>Fully Customizable</CardHeader>
                    <CardContent>Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.</CardContent>

                    <CardBadgeWrapper>
                        <CardBadge src={fullyCustomizableIcon} alt="Fully Customizable Icon" />
                    </CardBadgeWrapper>
                </CardFullyCustomizable>
            </CardsWrapper>
        </WrapperStatistics>
    )
}
