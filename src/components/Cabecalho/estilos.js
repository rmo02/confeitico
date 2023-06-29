import { StyleSheet } from "react-native";
import { THEME } from "../../theme";

export default StyleSheet.create({
  container: {
    height: 60,
    width: "100%",
    backgroundColor: "#1E8187",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  texto: {
    fontSize: 20,
    fontFamily: THEME.fonts.bold,
    fontWeight: "500",
    color: "#fff",
  },
  botao: {
    position: "absolute",
    right: 20,
  },
});