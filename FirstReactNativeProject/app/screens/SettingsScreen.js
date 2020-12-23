import React from 'react';
import { Text } from 'react-native';

import TestScreen from './TestScreen';
import ModButton from '../components/ModButton';

function SettingsScreen({ navigation }) {
    return (
        <TestScreen>
            <Text>Settings</Text>
            <ModButton title='About' onPress={() => navigation.navigate('About')}/>
        </TestScreen>
    )
}

export default SettingsScreen;