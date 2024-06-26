import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import AppNavigation from "./AppNavigation/AppNavigation";
import { Provider } from "react-redux";
import Store from "./context/store";

export default function App() {
  return (
    <Provider store={Store}>
      <AppNavigation />
    </Provider>
  );
}
