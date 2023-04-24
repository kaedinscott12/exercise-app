import "./App.css";
import React, { useState } from "react";
import RepetitionExercise from "./components/RepetitionExercise";
import DurationExercise from "./components/DurationExercise";
import WeightTracker from "./components/WeightTracker";
import { FlatList, Button, TextInput, View, Text } from "react-native";

function Home(props) {
  const data = [
    { id: 1, title: "Push Ups", screen: "repetition" },
    { id: 2, title: "Bicycling", screen: "duration" },
    { id: 3, title: "Jumping Jacks", screen: "repetition" },
    { id: 4, title: "Running", screen: "duration" },
    { id: 5, title: "Sit Ups", screen: "repetition" },
  ];

  const renderItem = ({ item }) => (
    <Button
      title={item.title}
      onPress={() => props.navigation.navigate(item.screen)}
    />
  );
  const [weightList, setWeightList] = useState([]);

  const handleAddWeight = (weight) => {
    setWeightList([...weightList, weight]);
  };

  return (
    <div className="App">
      <div>
        <h1>
          <br />
          <b>Hustle for that Muscle!</b>
        </h1>
        <br />
        <p>Select an Exercise:</p>
        <br />
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
        <WeightTracker onAddWeight={handleAddWeight} />
        <FlatList
          data={weightList}
          renderItem={({ item }) => <Text>{item}</Text>}
          keyExtractor={(item, index) => index.toString()}
        />
      </div>
    </div>
  );
}

function RepetitionExerciseScreen(props) {
  return (
    <div className="App">
      <div>
        <Button title="Back" onPress={() => props.navigation.goBack()} />
        <RepetitionExercise />
      </div>
    </div>
  );
}

function DurationExerciseScreen(props) {
  return (
    <div className="App">
      <div>
        <Button title="Back" onPress={() => props.navigation.goBack()} />
        <DurationExercise />
      </div>
    </div>
  );
}

function App() {
  const [page, setPage] = useState("home");

  const handleNavigation = (screen) => {
    setPage(screen);
  };

  if (page === "home") {
    return <Home navigation={{ navigate: handleNavigation }} />;
  }

  if (page === "repetition") {
    return (
      <RepetitionExerciseScreen
        navigation={{ goBack: () => setPage("home") }}
      />
    );
  }

  if (page === "duration") {
    return (
      <DurationExerciseScreen navigation={{ goBack: () => setPage("home") }} />
    );
  }
}

export default App;
