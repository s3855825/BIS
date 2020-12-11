import React from 'react';
import { View, StyleSheet } from 'react-native';

import Screen from '../components/Screen'
import ScreenHeader from '../components/ScreenHeader'
import InputTwo from '../components/InputTwo'

function AdvancedSearchScreen(props) {
    return (
        <Screen>
            <ScreenHeader>Advanced search</ScreenHeader>
            <View style={styles.body}>
                <InputTwo title='by:'/>
                <InputTwo title='include:'/>
                <InputTwo title='from:'/>
                <InputTwo title='to:'/>
            </View>
        </Screen>
    );
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        justifyContent: 'space-around'
    }
})

export default AdvancedSearchScreen;