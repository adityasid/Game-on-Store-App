import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import TextWrapper from '../utils/TextWrapper'

export default function CustomSwitch({
    selectionMode,
    option1,
    option2,
    onSelectSwitch,
}) {
    const [getSelectionMode, setSelectionMode] = useState(selectionMode);

    const updateSwitchData = value => {
        setSelectionMode(value);
        onSelectSwitch(value);
    };

    return (
        <View
            style={{
                height: 44,
                width: '100%',
                backgroundColor: '#e4e4e4',
                borderRadius: 10,
                borderColor: '#AD40AF',
                flexDirection: 'row',
                justifyContent: 'center',
            }}>
            <TouchableOpacity
                activeOpacity={1}
                onPress={() => updateSwitchData(1)}
                style={{
                    flex: 1,
                    backgroundColor: getSelectionMode == 1 ? '#AD40AF' : '#e4e4e4',
                    borderRadius: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                <TextWrapper
                    style={{
                        color: getSelectionMode == 1 ? 'white' : '#AD40AF',
                        fontSize: 14,
                    }}>
                    {option1}
                </TextWrapper>
            </TouchableOpacity>
            <TouchableOpacity
                activeOpacity={1}
                onPress={() => updateSwitchData(2)}
                style={{
                    flex: 1,
                    backgroundColor: getSelectionMode == 2 ? '#AD40AF' : '#e4e4e4',
                    borderRadius: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                <TextWrapper
                    style={{
                        color: getSelectionMode == 2 ? 'white' : '#AD40AF',
                        fontSize: 14,
                    }}>
                    {option2}
                </TextWrapper>
            </TouchableOpacity>
        </View>
    );
}