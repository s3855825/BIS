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

function GroupCard({ onPress, data: groupInfo, memberNum }) {
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
  }, [groupInfo]);

  let memberShow;
  if (data.length > 1) {
    memberShow = <Text style={styles.countMembers}>{data.length} members</Text>;
  } else {
    memberShow = <Text style={styles.countMembers}>{data.length} member</Text>;
  }

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
            {memberShow}
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
    width: 60,
    height: 60,
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
