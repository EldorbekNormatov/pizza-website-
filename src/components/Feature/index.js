import React from 'react';
import { FeatureContainer, FeatureButton } from './FeautureElements';

const Feature = () => {
    return (
        <FeatureContainer>
            <h1> Pizza of the Day </h1>
            <p> Truffle alfredo sauce topped width 24 carat gold
                dust. </p>
            <FeatureButton>
                Order Now
            </FeatureButton>
        </FeatureContainer>
    )
}

export default Feature
