import React, { useEffect, useContext } from "react";
import { StyleSheet, View } from "react-native";
import "react-native-gesture-handler";

import colors from "../config/colors";

import GroupList from "../components/GroupList";
import ScreenHeader from "../components/ScreenHeader";
import Screen from "../components/Screen";
import SearchBar from "../components/SearchBar";
import ModButton from "../components/ModButton";
import accountsApi from "../api/accounts";
import useApi from "../hooks/useApi";
import AuthContext from "../auth/context";
import ModForm from "../components/ModForm";

export default function App({ navigation }) {
  const { user } = useContext(AuthContext);
  const { data: allGroups, request: loadForGroups } = useApi(
    accountsApi.getUserGroups
  );

  useEffect(() => {
    loadForGroups(user.id);
  }, []);

  const loadGroups = () => {
    loadForGroups(user.id);
  };

  return (
    <Screen style={styles.container}>
      <ScreenHeader title="Group" />
      <View style={styles.body}>
        <View style={styles.searchArea}>
          <ModForm initialValues={{ searchText: "" }}>
            <SearchBar
              placeholder="search for post..."
              placeholderTextColor={"black"}
              style={{ width: "95%" }}
              name="searchText"
            />
          </ModForm>
        </View>
        <View style={styles.buttonArea}>
          <ModButton title="Reload Groups" onPress={loadGroups} />
          <ModButton
            title="Create a group"
            onPress={() => navigation.navigate("CreateGroups")}
          />
        </View>
        <View style={styles.postArea}>
          <GroupList groupData={allGroups} />
        </View>
      </View>
    </Screen>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.screen,
  },
  body: {
    flex: 1,
  },
  searchArea: {
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    marginHorizontal: 20,
  },
  postArea: {
    flex: 4,
    marginBottom: 10,
  },
  buttonArea: {
    flexDirection: "row",
    paddingVertical: 20,
    justifyContent: "space-evenly",
  },
});
