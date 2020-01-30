import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

import { createStore, combineReducers } from "redux";
import { Provider, useSelector } from "react-redux";

import counterReducer from "./store/reducers/counter.reducer";

import { increment, decrement } from "./store/actions/counter.action";

const rootReducers = combineReducers({
  counter: counterReducer
});

let store = createStore(rootReducers);

const Test = () => {
  const counter = useSelector((state: any) => state.counter);

  return (
    <View style={styles.container}>
      <Text>{counter}</Text>
      <Button title="+" onPress={() => store.dispatch(increment())} />
      <Button title="-" onPress={() => store.dispatch(decrement())} />
    </View>
  );
};

export default function App() {
  console.log(store.getState().counter);
  return (
    <Provider store={store}>
      <Test />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
