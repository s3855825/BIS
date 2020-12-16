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
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import Header from '../shared/Header';

function MyStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      headerMode="screen"
      screenOptions={{
        headerTintColor: 'white',
        headerStyle: { backgroundColor: 'tomato' },
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Awesome app',
        }}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          title: 'My profile',
        }}
      />
      <Stack.Screen
        name="Settings"
        component={Settings}
        options={{
          gestureEnabled: false,
        }}
      />
    </Stack.Navigator>
  );
}

export default class GroupListScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data:[
        {
          id:3,
          image: "https://via.placeholder.com/100x100/FFB6C1/000000",
          name:"Group 1",
          countMembers:4,
          members:[
            "https://bootdey.com/img/Content/avatar/avatar6.png",
            "https://bootdey.com/img/Content/avatar/avatar1.png",
            "https://bootdey.com/img/Content/avatar/avatar2.png",
                                  "https://bootdey.com/img/Content/avatar/avatar7.png"

          ]
        },
        {
          id:2,
          image: "https://via.placeholder.com/100x100/4682B4/000000",
          name:"Group 2",
          countMembers:4,
          members:[
            "https://bootdey.com/img/Content/avatar/avatar6.png",
            "https://bootdey.com/img/Content/avatar/avatar1.png",
                      "https://bootdey.com/img/Content/avatar/avatar7.png",
                        "https://bootdey.com/img/Content/avatar/avatar3.png"
          ]
        },
        {
          id:4,
          image: "https://via.placeholder.com/100x100/008080/000000",
          name:"Group 3",
          countMembers:4,
          members:[
            "https://bootdey.com/img/Content/avatar/avatar6.png",
            "https://bootdey.com/img/Content/avatar/avatar1.png",
            "https://bootdey.com/img/Content/avatar/avatar2.png",
                                    "https://bootdey.com/img/Content/avatar/avatar4.png"
          ]
        },
        {
          id:5,
          image: "https://via.placeholder.com/100x100/FF6347/000000",
          name:"Group 4",
          countMembers:4,
          members:[
            "https://bootdey.com/img/Content/avatar/avatar6.png",
            "https://bootdey.com/img/Content/avatar/avatar1.png",
            "https://bootdey.com/img/Content/avatar/avatar2.png",
            "https://bootdey.com/img/Content/avatar/avatar7.png"
          ]
        }
      ]
    }
  }

  renderGroupMembers = (group) => {
    if(group.members) {
      return (
        <View style={styles.groupMembersContent}>
          {group.members.map((prop, key) => {
            return (
              <Image key={key} style={styles.memberImage}  source={{uri:prop}}/>
            );
          })}
        </View>
      );
    }
    return null;
  }

  render() {
    return (
      <FlatList
        style={styles.root}
        data={this.state.data}
        extraData={this.state}
        ItemSeparatorComponent={() => {
          return (
            <View style={styles.separator}/>
          )
        }}
        keyExtractor={(item)=>{
          return item.id;
        }}
        renderItem={(item) => {
          const Group = item.item;
          let mainContentStyle;
          if(Group.attachment) {
            mainContentStyle = styles.mainContent;
          }
          return(
            <View style={styles.container}>
              <Image source={{uri:Group.image}} style={styles.avatar}/>
              <View style={styles.content}>
                <View style={mainContentStyle}>
                  <View style={styles.text}>
                    <Text style={styles.groupName}>{Group.name}</Text>
                  </View>
                  <Text style={styles.countMembers}>
                    {Group.countMembers} members
                  </Text>
                  {this.renderGroupMembers(Group)}
                </View>
              </View>
            </View>
          );
        }}/>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: "#FFFFFF"
  },
  container: {
    padding: 16,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: "#FFFFFF",
    alignItems: 'flex-start'
  },
  avatar: {
    width:55,
    height:55,
    borderRadius:25,
  },
  text: {
    marginBottom: 5,
    flexDirection: 'row',
    flexWrap:'wrap'
  },
  content: {
    flex: 1,
    marginLeft: 16,
    marginRight: 0
  },
  mainContent: {
    marginRight: 60
  },
  memberImage: {
    height: 30,
    width: 30,
    marginRight:4,
    borderRadius:10,
  },
  separator: {
    height: 1,
    backgroundColor: "#CCCCCC"
  },
  countMembers:{
    color:"#20B2AA"
  },
  groupName:{
    fontSize:23,
    color:"#1E90FF"
  },
  groupMembersContent:{
    flexDirection:'row',
    marginTop:10
  }
});

