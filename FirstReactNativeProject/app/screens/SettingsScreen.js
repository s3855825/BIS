import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    FlatList
} from 'react-native';
import 'react-native-gesture-handler';

import { Formik } from 'formik';
import * as Yup from 'yup';

import colors from '../config/colors';

import TestScreen from './TestScreen';
import ScreenHeader from '../components/ScreenHeader';
import ModButton from '../components/ModButton';
import ModTextInput from '../components/ModTextInput';
import usersApi from '../api/edit';
import authApi from '../api/auth';
import storeToken from '../api/token';
import storeId from '../api/id';
import Screen from '../components/Screen';

const validationSchema = Yup.object().shape({
    email: Yup.string().required().label('Email'),
    username: Yup.string().required().label('Username'),
    password: Yup.string().required().min(8).label('Password')
});

export default function SettingsScreen({ navigation }) {

    const handleSubmit = async ({ email, username, password }) => {
        const result = await usersApi.edit(email, username, password);

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
            <Screen style={styles.container}>
                <ScreenHeader title='Settings' />
                <View style={styles.body}>
                    <Formik
                        initialValues={{ email: '', username: '', password: '' }}
                        onSubmit={handleSubmit}
                        validationSchema={validationSchema}
                    >
                        {({ handleChange, handleSubmit, errors }) => (
                            <>
                                <Text>Edit Email:</Text>
                                <ModTextInput
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    placeholder='email'
                                    keyboardType="email-address"
                                    textContentType="emailAddress"
                                    onChangeText={handleChange('email')}
                                    style={{ width: '95%', margin: 10 }}
                                />
                                <Text style={{ color: 'red' }}>{errors.email}</Text>
                                <Text>Edit Username:</Text>
                                <ModTextInput
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    placeholder='username'
                                    onChangeText={handleChange('username')}
                                    style={{ width: '95%', margin: 10 }}
                                />
                                <Text style={{ color: 'red' }}>{errors.username}</Text>
                                <Text>Edit Password:</Text>
                                <ModTextInput
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    placeholder='password'
                                    textContentType="password"
                                    secureTextEntry
                                    onChangeText={handleChange('password')}
                                    style={{ width: '95%', margin: 10 }}
                                />
                                <Text style={{ color: 'red' }}>{errors.password}</Text>
                                <ModButton style={{ width: '95%', margin: 10 }} title='Confirm' onPress={handleSubmit} />
                            </>
                        )}
                    </Formik>
                    <View style={styles.postArea}>
                        <TestScreen>
                            <ModButton style={{ width: '95%', margin: 10 }} title='About' onPress={() => navigation.navigate('About')} />
                        </TestScreen>
                    </View>
                </View>
            </Screen>
        );
    }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
        justifyContent: 'center',
        backgroundColor: colors.screen
    },
    body: {
        flex: 1
    },
    postArea: {
        flex: 4,
        marginTop: 50,
        marginBottom: 10
    }
})