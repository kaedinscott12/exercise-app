import React, { useState } from "react";
import { View, TextInput, Button, FlatList, Text } from "react-native";

const WeightTracker = () => {
  const [weight, setWeight] = useState("");
  const [entries, setEntries] = useState([]);

  const handleAddEntry = () => {
    if (weight === "") return;

    const newEntry = { id: Date.now().toString(), weight: parseFloat(weight) };
    setEntries((prevEntries) => [...prevEntries, newEntry]);
    setWeight("");
  };

  const renderItem = ({ item }) => (
    <Text style={{ fontSize: 18, marginVertical: 4 }}>{item.weight} lbs</Text>
  );

  return (
    <View>
      <TextInput
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
          padding: 8,
          marginBottom: 16,
        }}
        placeholder="Enter weight"
        value={weight}
        onChangeText={(text) => setWeight(text)}
        keyboardType="numeric"
      />
      <Button title="Add entry" onPress={handleAddEntry} />
      <FlatList
        data={entries}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={<Text>No entries yet.</Text>}
      />
    </View>
  );
};

export default WeightTracker;
