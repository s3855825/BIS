import React from 'react';
import { TextInput, View, StyleSheet } from 'react-native';

function KusTextInput({ style, ...otherProps }) {
    return (
        <View style={[styles.container, style]}>
            <TextInput {...otherProps} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        borderWidth: 2,
        borderRadius: 10
    },
})

export default KusTextInput;