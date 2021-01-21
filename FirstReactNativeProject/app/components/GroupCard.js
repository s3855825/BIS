import React, { useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TouchableHighlight,
} from "react-native";

import groupsApi from "../api/groups";

const members = [
  {
    member_id: 2,
    member_name: "test1",
  },
  {
    member_id: 2,
    member_name: "test1",
  },
  {
    member_id: 2,
    member_name: "test1",
  },
];

function GroupCard({ onPress, data: groupInfo }) {
  const { data, loading, request } = useApi(groupsApi.getMembers);

  // const renderGroupMembers = (group) => {
  //   if(group.members) {
  //     return (
  //       <View style={styles.groupMembersContent}>
  //         {group.members.map((prop, key) => {
  //           return (
  //             <Image key={key} style={styles.memberImage}  source={{uri:prop}}/>
  //           );
  //         })}
  //       </View>
  //     );
  //   }
  //   return null;
  // }

  useEffect(() => {
    request(groupInfo.id);
    console.log(data.length);
  }, []);

  return (
    <TouchableHighlight
      underlayColor="lightgrey"
      style={styles.container}
      onPress={onPress}
    >
      <View style={styles.container}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>
            {groupInfo.group_name[0].toUpperCase()}
          </Text>
        </View>

        <View style={styles.content}>
          <View style={styles.mainContent}>
            <View style={styles.text}>
              <Text style={styles.groupName}>{groupInfo.group_name}</Text>
            </View>
            <Text style={styles.countMembers}>
              {/* {Group.countMembers} members */}
            </Text>
            {/* {renderGroupMembers(Group)} */}
          </View>
        </View>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: "#FFFFFF",
  },
  container: {
    padding: 10,
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "#FFFFFF",
    alignItems: "flex-start",
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 50,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
  },
  avatarText: {
    fontSize: 30,
    color: "black",
  },
  text: {
    marginBottom: 5,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  content: {
    flex: 1,
    marginLeft: 16,
    marginRight: 0,
  },
  mainContent: {
    marginRight: 60,
  },
  memberImage: {
    height: 30,
    width: 30,
    marginRight: 4,
    borderRadius: 10,
  },
  separator: {
    height: 1,
    backgroundColor: "#CCCCCC",
  },
  countMembers: {
    color: "#20B2AA",
  },
  groupName: {
    fontSize: 22,
    color: "#1E90FF",
  },
  groupMembersContent: {
    flexDirection: "row",
    marginTop: 10,
  },
});

export default GroupCard;
