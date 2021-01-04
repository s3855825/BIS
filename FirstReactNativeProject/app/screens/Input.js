import { Component } from "react";
import { View } from "react";
import { StyleSheet ,Text, TextInput, Button } from "react-native"

class Input extends Component {

    state = {
        myTextInput: '',
        users:['John', 'James', 'Lisa' ]
    }

    onChangeInput = (event) => {
        this.setState({
            myTextInput: event
        })
    }

    onAddUser = () => {
        this.setState (prevState => {
            return {
                myTextInput: '',
                users:[...prevState.users, prevState.myTextInput]
            }
        })
    }

    render() {
        return (
            <View style={StyleSheet.inputWrapper}>

                {
                    this.state.users.map( item => (
                        <Text style={StyleSheet.users} key={item}> {item}</Text>
                    ))
                }

                <TextInput
                    value={this.state.myTextInput}
                    style={StyleSheet.input}
                    onChangeText={this.onChangeInput}
                    // multiline={true}
                    // maxLength={100}
                    // editable={true}
                    // autoCapitalize={'characters'}
                />
                <Button 
                    title = "Add user name"
                    onPress={this.onAddUser}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    inputWrapper: {
        width: '100%'
    },
    input:{
        width: '100%',
        backgroundColor: '#f2f2f2',
        marginTop: 20,
        fontSize: 20,
        padding: 10
    },
    users: {
        fontSize: 30,
        borderWidth: 1,
        borderColor: '#cecece',
        padding: 10,
        marginBottom: 20
    }
})

export default Input