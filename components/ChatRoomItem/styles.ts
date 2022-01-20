import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    //  alignItems: "center",
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 10,
    // color: "green",
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 100,
    marginRight: 10,
  },
  rightContainer: {
    flex: 1,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  badge: {
    backgroundColor: "#3872E9",
    padding: 2,
    width: 20,
    height: 20,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    left: 45,
    top: 10,
    borderWidth: 1,
    borderColor: "white",
  },
  badgeText: {
    fontSize: 10,
  },
  name: {
    fontWeight: "bold",
    marginBottom: 3,
    color: "white",
  },
  text: {
    paddingLeft: 10,
    color: "grey",
  },
});
export default styles;
