import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

import edge from '../config/edge'

function InputTwo({ placeHolder }) {
    return (
        <View style={styles.field}>
            <TextInput style={styles.input} placeholder={placeHolder}/>
        </View>
    );
}

const styles = StyleSheet.create({
    field: {
        flex: 1,
        borderWidth: 2,
        borderRadius:edge.global,
        justifyContent:"center",
        paddingVertical: 8,
        paddingHorizontal: 20,
    },
    input: {
        fontSize: 20,
    },
})

export default InputTwo;