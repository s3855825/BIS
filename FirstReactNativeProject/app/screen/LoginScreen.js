import React, { useState } from 'react';
import { View, StyleSheet, Text, Alert } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';

import ModTextInput from '../components/ModTextInput';
import ModButton from '../components/ModButton';
import authApi from '../api/auth';
import ErrorMessage from '../components/ErrorMessage';


const validationSchema = Yup.object().shape({
    username: Yup.string().required().label('Username'),
    password: Yup.string().required().min(4).label('Password')
});

function LoginScreen() {
    const [loginFailed, setLoginFailed] = useState(false);

    const handleSubmit = async ({ username, password }) => {
        const result = await authApi.login(username, password);
        Alert.alert(result.data.username, "login success")
        
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
                        <ErrorMessage error='Invalid username or password' visible={loginFailed} />
                        <ModTextInput 
                            autoCapitalize="none"
                            autoCorrect={false}
                            placeholder='username'
                            // keyboardType="email-address"
                            // textContentType="emailAddress"
                            onChangeText={handleChange('username')}
                            style={{ width: '90%', margin: 10 }}
                        />
                        <Text style={{ color: 'red' }}>{errors.username}</Text>
                        <ModTextInput
                            autoCapitalize="none"
                            autoCorrect={false}
                            placeholder='password'
                            textContentType="password"
                            secureTextEntry
                            onChangeText={handleChange('password')}
                            style={{ width: '90%', margin: 10 }}
                        />
                        <Text style={{ color: 'red' }}>{errors.password}</Text>
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

export default LoginScreen;