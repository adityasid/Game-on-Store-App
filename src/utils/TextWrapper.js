import React from 'react';
import { Text } from 'react-native';

// Roboto-Regular
// Roboto-Bold
// DancingScript-Regular
export const customDefaultFontFamily = 'Roboto-Medium';
export const customFontFamilyBold = 'Inter-Bold';
export const customFontFamily700 = 'DancingScript-Regular';
export const customFontFamilyMediumItalic = 'Roboto-MediumItalic';


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