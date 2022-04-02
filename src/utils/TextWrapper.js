import React from 'react';
import { Text } from 'react-native';

// Roboto-Regular
// Roboto-Bold
// DancingScript-Regular
export const customDefaultFontFamily = 'Roboto-Medium';
export const customFontFamilyBold = 'Roboto-Bold';
export const customFontFamily700 = 'DancingScript-Regular';


function TextWrapper(props) {

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

export default TextWrapper