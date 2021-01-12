import colors from "../config/colors";

export default {
  container: {
    flex: 1,
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
  buttonArea: {
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingRight: 50,
    paddingTop: 10,
  },
  postArea: {
    flex: 1,
    marginVertical: 10,
    marginHorizontal: 20,
  },
};
