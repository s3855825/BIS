import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

  interface State {
    email: string;
    password: string;
  }

class LoginScreen extends React.Component<{}, State> {
state = {
email: "",
password: ""
};

handleEmailChange = (email: string) => {
this.setState({email: email});
};

handlePasswordChange = (password: string) => {
this.setState({ password: password});
};

handleLoginPress = () => {
console.log("Login button pressed");
}

render () {
  return (
        <View style={styles.container}>
                <Text style={styles.logo}>Group-Finding App</Text>

    <View style={styles.inputView}>
<TextInput
value = {this.state.email}
            style={styles.inputText}
            placeholder="Email..."
            placeholderTextColor="#000000"
            onChangeText={this.handleEmailChange}/>
            </View>

                    <View style={styles.inputView} >
                      <TextInput
                      value = {this.state.password}
                        secureTextEntry
                        style={styles.inputText}
                        placeholder="Password..."
                        placeholderTextColor="#000000"
                        onChangeText={this.handlePasswordChange}/>
            </View>

                  <TouchableOpacity style = {{alignItems: 'center',
                                                  justifyContent: 'center'}}>
                      <Text style={styles.forgot}>Forgot Password?</Text>
                    </TouchableOpacity>

                                                        <TouchableOpacity style={styles.loginBtn}>
                                                          <Text style={styles.loginText}>LOGIN</Text>
                                                        </TouchableOpacity>

                           <TouchableOpacity style = {{margin: 10, alignItems: 'center', justifyContent: 'center'}}>
                              <Text style={styles.loginText}>Signup</Text>
                            </TouchableOpacity>
    </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
  width: '100%',
  height: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    flex: 1,
    backgroundColor: '#ffffff'
  },
    logo:{
    alignSelf: 'center',
    alignContent: 'center',
    justifyContent: 'center',
      fontWeight:"bold",
      fontSize:50,
      color:"#000000",
      marginBottom:40
    },
      inputView:{
        width:"80%",
        backgroundColor:"#DDDDDD",
        borderRadius:25,
        height:50,
        marginBottom:20,
        justifyContent:"center",
        padding:20
      },
       inputText:{
          height:50,
          color:"#000000"
        },
          forgot:{
            color:"#000000",
            fontSize:11
          },
            loginBtn:{
              width:"80%",
              backgroundColor:"#DDDDDD",
              borderRadius:25,
              height:50,
              justifyContent:"center",
              alignItems: "center",
              marginTop:40,
              marginBottom:10
            },
              loginText:{
                color:"#000000"
              }
});

export default LoginScreen;
