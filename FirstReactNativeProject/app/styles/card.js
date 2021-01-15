import border from "../config/border";
import bgColor from "../config/bgColor";

export default {
  container: {
    flex: 1,
    borderWidth: border.width,
    borderRadius: border.radius,
    backgroundColor: bgColor.inputbg,
  },
  headerArea: {
    flex: 1,
    flexDirection: "row",
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  titleCon: {
    flex: 1,
    paddingLeft: 10,
  },
  subHeaderCon: {
    paddingLeft: 15,
    paddingTop: 5,
  },
  bodyArea: {
    flex: 3,
    padding: 15,
  },
  footerArea: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  btnCon: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  subText: {
    fontStyle: "italic",
  },
  bodyText: {
    fontSize: 14,
  },
  requestButton: {
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  btnText: {
    fontStyle: "italic",
    fontSize: 15,
  },
};
