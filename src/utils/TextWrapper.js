import React from 'react';
import { Text } from 'react-native';

// DancingScript-Regular
// Roboto-Regular
// Roboto-Bold
export const customDefaultFontFamily = 'Roboto-Regular';
export const customFontFamilyBold = 'Roboto-Bold';
export const customFontFamily700 = 'HelveticaNowDisplay-Bold';


function TextFont(props) {

    const { style, children, customFontFamily = customDefaultFontFamily, ...propss } = props;

    return (
        <Text
            style={[
                style,
                {
                    fontFamily: customFontFamily
                },
            ]}
            {...propss}
        >
            {children}
        </Text>
    )
}

export default TextFont