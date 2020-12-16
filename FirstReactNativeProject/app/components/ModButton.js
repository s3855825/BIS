import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

function KusButton({ style, title, ...otherProps }) {
    return (
        <TouchableOpacity style={[styles.container, style]} {...otherProps} >
            <Text>{ title }</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        borderWidth: 2,
        borderRadius: 10,
        alignItems: 'center'
    },
})

export default KusButton;