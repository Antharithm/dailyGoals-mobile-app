import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  return (
    // outter box
    <View style={styles.appContainer}>
      {/* input field */}
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder="Your course goal!" />
        <Button title="Add Goal" />
      </View>
      {/* // goal list box */}
      <View style={styles.goalsContainer}>
        <Text>List of goals...</Text>
      </View>
    </View>
  );
}

// Import stylesheet for auto completion
const styles = StyleSheet.create({
  // outter box
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  // input field box
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margingBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  // text field box
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
  // goals box
  goalsContainer: {
    flex: 5,
  },
});
