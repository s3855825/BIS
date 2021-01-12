import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Modal,
  FlatList,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import ModText from "./ModText";

function ModPicker({ icon, style, placeholder, listData }) {
  const [modalOn, setModalOn] = useState(false);
  const [choosen, setChoosen] = useState(placeholder);

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalOn(true)}>
        <View style={[styles.container, style]}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={20}
              color="grey"
              style={styles.icon}
            />
          )}
          <ModText style={styles.text}>{placeholder}</ModText>
          <MaterialCommunityIcons name="chevron-down" size={20} color="grey" />
        </View>
      </TouchableWithoutFeedback>
      <Modal
        visible={modalOn}
        animationType="slide"
        onRequestClose={() => {
          setModalOn(false);
        }}
      >
        <FlatList
          data={listData}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => setChoosen(item.name)}>
              <ModText style={styles.item}>{item.name}</ModText>
            </TouchableOpacity>
          )}
        />
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderWidth: 2,
    borderRadius: 10,
    justifyContent: "center",
  },
  icon: {
    paddingRight: 10,
  },
  text: {
    flex: 1,
  },
  item: {
    paddingBottom: 10,
  },
});

export default ModPicker;
