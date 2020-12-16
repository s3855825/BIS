import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';

import KusTextInput from '../components/KusTextInput';
import KusButton from '../components/KusButton';
import authApi from '../api/auth';
import { login } from '../api/mock';

const validationSchema = Yup.object().shape({
    username: Yup.string().required().label('Email'),
    password: Yup.string().required().min(4).label('Password')
});

function LoginScreen() {
    const [loginFailed, setLoginFailed] = useState(false);

    const handleSubmit = async ({ username, password }) => {
        const result = await authApi.login(username, password);
        console.log(result.data)
        if (!result.ok) return setLoginFailed(true)
        setLoginFailed(false)
        console.log('success');
    }

    return (
        <View style={styles.container}>
            <Formik
                initialValues={{ username:'', password: '' }}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
            >
                { ({ handleChange, handleSubmit, errors }) => (
                    <>
                        <Text>Invalid username or password</Text>
                        <KusTextInput 
                            placeholder='username'
                            autoCapitalize="none"
                            autoCorrect={false}
                            // keyboardType="email-address"
                            // textContentType="emailAddress"
                            onChangeText={handleChange('username')}
                            style={{ width: '90%' }}/>
                        <Text style={{ color: 'red' }}>{errors.username}</Text>
                        <KusTextInput
                            placeholder='password'
                            style={{ width: '90%', margin: 10 }}
                            autoCapitalize="none"
                            autoCorrect={false}
                            textContentType="password"
                            onChangeText={handleChange('password')}
                            secureTextEntry/>
                        <Text style={{ color: 'red' }}>{errors.password}</Text>
                        <KusButton style={{ width: '90%' }} title='Confirm' onPress={handleSubmit}/>
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

export default LoginScreen;