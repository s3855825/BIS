import React, { useEffect, useContext } from "react";
import { View } from "react-native";

import AuthContext from "../auth/context";
import groupsApi from "../api/groups";
import useApi from "../hooks/useApi";
import routes from "../navigation/routes";
import barNList from "../styles/barNList";

import Screen from "../components/Screen";
import ScreenHeader from "../components/ScreenHeader";
import SearchBar from "../components/SearchBar";
import GroupList from "../components/GroupList";
import ModForm from "../components/ModForm";
import TouchableText from "../components/TouchableText";

export default function App({ navigation }) {
  const { user } = useContext(AuthContext);

  const { data: allData, request: loadForData } = useApi(
    groupsApi.getUserGroups
  );

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    loadForData(user.id);
  };

  return (
    <Screen style={barNList.container}>
      <ScreenHeader title="Group" />

      <View style={barNList.body}>
        <View style={barNList.searchArea}>
          <ModForm initialValues={{ searchText: "" }}>
            <SearchBar
              placeholder="search for post..."
              placeholderTextColor={"black"}
              style={{ width: "95%" }}
              name="searchText"
            />
          </ModForm>
        </View>

        <View style={barNList.buttonArea}>
          <TouchableText
            onPress={() => navigation.navigate(routes.CREATE_GROUPS)}
          >
            Create a group
          </TouchableText>
        </View>

        <View style={barNList.groupArea}>
          <GroupList groupData={allData} />
        </View>
      </View>
    </Screen>
  );
}
