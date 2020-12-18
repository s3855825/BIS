import React from 'react';
import { StyleSheet, Text } from 'react-native'

function ErrorMessage({ visible, error }) {
    if (!visible) return null;

    return (
        <Text style={styles.error}>{error}</Text>
    );
}

const styles = StyleSheet.create({
    error: {
        color: 'red',
        fontSize: 15
    }
})

export default ErrorMessage;