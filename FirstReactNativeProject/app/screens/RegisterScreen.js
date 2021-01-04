import React, {  } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';

import ModTextInput from '../components/ModTextInput';
import ModButton from '../components/ModButton';
import usersApi from '../api/register';
import ErrorMessage from '../components/ErrorMessage';
import authApi from '../api/auth';
import storeToken from '../api/token';
import storeId from '../api/id';


const validationSchema = Yup.object().shape({
    email: Yup.string().required().label('Email'),
    username: Yup.string().required().label('Username'),
    password: Yup.string().required().min(8).label('Password')
});

function RegisterScreen({ navigation }) {
    const handleSubmit = async ({ email, username, password }) => {
        const result = await usersApi.register(email, username, password);

        if (!result.ok) {
            console.log(result.data);
            return;
        }

        const response = await authApi.login(username, password);
        
        if (!response.ok) {
            console.log(response.error);
        }

        const userID = response.data.token.split(': ')[0];
        const userToken = response.data.token.split(': ')[1];
        storeId.setID(userID);
        storeToken.setToken(userToken);

        navigation.navigate('Dashboard');
    }

    return (
        <View style={styles.container}>
            <Formik
                initialValues={{ email: '', username:'', password: '' }}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
            >
                { ({ handleChange, handleSubmit, errors }) => (
                    <>
                        <ModTextInput 
                            autoCapitalize="none"
                            autoCorrect={false}
                            placeholder='email'
                            keyboardType="email-address"
                            textContentType="emailAddress"
                            onChangeText={handleChange('email')}
                            style={{ width: '90%', margin: 10 }}
                        />
                        <Text style={{ color: 'red' }}>{errors.email}</Text>
                        <ModTextInput 
                            autoCapitalize="none"
                            autoCorrect={false}
                            placeholder='username'
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

export default RegisterScreen;