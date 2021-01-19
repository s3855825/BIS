import border from "../config/border";
import bgColor from "../config/bgColor";

export default {
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.3)",
  },
  bar: {
    width: "90%",
    marginVertical: 10,
  },
  modalView: {
    margin: 20,
    padding: 20,
    backgroundColor: bgColor.modal,
    borderRadius: border.radius,
    alignItems: "center",
    elevation: 10,
  },
};
