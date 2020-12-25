import React, { useState } from 'react';
import { View, StyleSheet, Text, Alert } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';

import ModTextInput from '../components/ModTextInput';
import ModButton from '../components/ModButton';
import authApi from '../api/auth';
import ErrorMessage from '../components/ErrorMessage';
import storeToken from '../api/token';
import storeID from '../api/id';

const validationSchema = Yup.object().shape({
    username: Yup.string().required().label('Username'),
    password: Yup.string().required().min(4).label('Password')
});

function LoginScreen({ navigation }) {
    const [loginFailed, setLoginFailed] = useState(false);

    const handleSubmit = async ({ username, password }) => {
        // const response = await authApi.login(username, password);
        
        // if (!response.ok) {
        //     console.log(response.error);
        //     return setLoginFailed(true);
        // }
        // setLoginFailed(false);
        // console.log(response.data.token);
        // const userID = response.data.token.split(': ')[0];
        // const userToken = response.data.token.split(': ')[1];
        // console.log(userID, userToken);
        // storeID.setID(userID);
        // storeToken.setToken(userToken);

        navigation.navigate('Dashboard');
    }

    return (
        <View style={styles.container}>
            <Formik
                initialValues={{ username:'', password: '' }}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
            >
                { ({ handleSubmit, handleChange, errors }) => (
                    <>
                        <ErrorMessage error='Invalid username or password' visible={loginFailed} />
                        <ModTextInput 
                            autoCapitalize="none"
                            autoCorrect={false}
                            placeholder='username'
                            onChangeText={handleChange('username')}
                            style={styles.bar}
                        />
                        <Text style={{ color: 'red' }}>{errors.username}</Text>
                        <ModTextInput
                            autoCapitalize="none"
                            autoCorrect={false}
                            placeholder='password'
                            textContentType="password"
                            secureTextEntry
                            onChangeText={handleChange('password')}
                            style={styles.bar}
                        />
                        <Text style={{ color: 'red' }}>{errors.password}</Text>
                        <ModButton
                            style={styles.bar}
                            title='Confirm'
                            onPress={handleSubmit}/>
                        <ModButton
                            style={styles.bar}
                            title='Register'
                            onPress={() => navigation.navigate('Register')}/>
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
    },
    bar: {
        width: '90%',
        margin: 10
    }
})

export default LoginScreen;