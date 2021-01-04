import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList
} from 'react-native';

import ModButton from '../components/ModButton';

    // renderGroupMembers = (group) => {
    //     if(group.members) {
    //       return (
    //         <View style={styles.groupMembersContent}>
    //           {group.members.map((prop, key) => {
    //             return (
    //               <Image key={key} style={styles.memberImage}  source={{uri:prop}}/>
    //             );
    //           })}
    //         </View>
    //       );
    //     }
    //     return null;
    //   }

function GroupList({ groupData }) {
    const navigation = useNavigation();

    return (
        <>
            <FlatList
            style={styles.root}
            data={groupData}
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
                    <TouchableOpacity
                        style={styles.container}
                        onPress={() => navigation.navigate('GroupDetails')}
                    >
                        <Image source={{uri:Group.image}} style={styles.avatar}/>
                        <View style={styles.content}>
                        <View style={mainContentStyle}>
                            <View style={styles.text}>
                                <Text style={styles.groupName}>{Group.name}</Text>
                            </View>
                            <Text style={styles.countMembers}>
                                {Group.countMembers} members
                            </Text>
                            {/* {renderGroupMembers(Group)} */}
                        </View>
                        </View>
                    </TouchableOpacity>
                );
            }}
            />
          </>
      );
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
    },
  });

export default GroupList;