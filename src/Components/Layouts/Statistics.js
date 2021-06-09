import React from 'react'
import brandRecognitionIcon from '../../Images/icon-brand-recognition.svg'
import detailedRecordsIcon from '../../Images/icon-detailed-records.svg'
import fullyCustomizableIcon from '../../Images/icon-fully-customizable.svg'

export default function Statistics() {
    return (
        <article>
            <section>
                <h1>Advanced Statistics</h1>
                <p>Track how your links are performing across the web with our advanced statistics dashboard. </p>
            </section>
            <section>
                <section>
                    <h2>Brand Recognition</h2>
                    <p>Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.</p>
                    <img src={brandRecognitionIcon} alt="Brand Recognition Icon" />
                </section>
                <section>
                    <h2>Detailed Records</h2>
                    <p>Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.</p>
                    <img src={detailedRecordsIcon} alt="Detailed Records Icon" />
                </section>
                <section>
                    <h2>Fully Customizable</h2>
                    <p>Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.</p>
                    <img src={fullyCustomizableIcon} alt="Fully Customizable Icon" />
                </section>
            </section>
        </article>
    )
}
