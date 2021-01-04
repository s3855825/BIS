import React from 'react';
import { Text, StyleSheet } from 'react-native';
import Unorderedlist from 'react-native-unordered-list';

import TestScreen from './TestScreen';

function AboutScreen() {
    return (
        <TestScreen>
            <Text style={styles.title}>Groupmate-Finding App</Text>
            <Text>Created By:</Text>
            <Unorderedlist><Text>Tran Minh Duc (s3855825)</Text></Unorderedlist>
            <Unorderedlist><Text>Nguyen Manh Quoc Viet (s3759306)</Text></Unorderedlist>
            <Unorderedlist><Text>Do Vu Thanh Vinh (s3818471)</Text></Unorderedlist>
            <Unorderedlist><Text>Nguyen Anh Tuan (s3817907)</Text></Unorderedlist>
            <Text style={styles.row}></Text>
            <Text>Technologies Used:</Text>
            <Unorderedlist><Text>React</Text></Unorderedlist>
            <Unorderedlist><Text>React Native</Text></Unorderedlist>
            <Unorderedlist><Text>Postman</Text></Unorderedlist>
            <Unorderedlist><Text>Expo</Text></Unorderedlist>
         </TestScreen>
    )
}

const styles = StyleSheet.create({
    title: {
        textAlign: 'center',
        fontWeight: 'bold',
        lineHeight: 50,
        fontSize: 20
    },

    row: {
        lineHeight: 50
    }
});

export default AboutScreen;