import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';

import ModTextInput from '../components/ModTextInput';
import ModButton from '../components/ModButton';
import postsApi from '../api/posts';
import storeID from '../api/id';
import groupsApi from '../api/groups';

const validationSchema = Yup.object().shape({
    groupName: Yup.string().required().min(1).max(500).label('groupName'),
});

function CreatePostScreen() {
    const [author, setAuthor] = useState('4')
    // storeID.getID().then(id => setAuthor(id));

    const handleSubmit = async ({ groupName }) => {
        const result = await groupsApi.addGroups(groupName);
        if (!result.ok) {
            console.log(result.problem);
            return alert('Error. Could not send the request.');
        }
        console.log(result.data);
        alert('Success');
    }

    return (
        <View style={styles.container}>
            <Formik
                initialValues={{ groupName: '' }}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
            >
                { ({ handleChange, handleSubmit, errors }) => (
                    <>
                        <ModTextInput 
                            placeholder='groupName'
                            onChangeText={handleChange('groupName')}
                            style={{ width: '90%', margin: 10 }}
                        />
                        <Text style={{ color: 'red' }}>{errors.groupName}</Text>
                        <ModButton style={{ width: '90%', margin: 10 }} title='Confirm' onPress={handleSubmit}/>
                    </>
                )}
            </Formik>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default CreatePostScreen;