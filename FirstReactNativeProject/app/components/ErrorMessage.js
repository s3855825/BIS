import React from 'react';
import { StyleSheet, Text } from 'react-native'

function ErrorMessage({ error }) {
    if (error) return null;

    return (
        <Text>{error}</Text>
    );
}

export default ErrorMessage;