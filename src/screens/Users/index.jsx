import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

import styles from "./styles";
import Title from "../../components/Title";
import ColorInput from "../../components/ColorInput/index.jsx";

import Planet from "../../models/planet/Planent.js";
import PlanetsRepository from "../../models/planet/PlanentRepository";
import { useNavigation } from "@react-navigation/native";

const planetsList = new PlanetsRepository();

let planetId = 1;

export default function Users(planet, edit) {
  const { data } = planet.params;
  const navigation = useNavigation();

  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [color1, setColor1] = useState("");
  const [color2, setColor2] = useState("");
  const [population, setPopulation] = useState("");
  const [naturalResources, setNaturalResources] = useState("");
  const [numberHumanSettlements, setNumberHumanSettlements] = useState("");
  const [location, setLocation] = useState("");
  const [communication, setCommunication] = useState("");
  const [planetRuler, setPlanetRuler] = useState("");
  const [updateOn, setUpdateOn] = useState(false);

  setUpdateOn(edit);

  const [allPlanets, setAllPlanets] = useState([]);

  const concatDate = () => {
    setDate(`${day}/${month}/${year}`);
  };

  const resetDate = () => {
    date.split("/");
    setDay(date[0]);
    setMonth(date[1]);
    setYear(date[2]);
  };

  const createPlanet = () => {
    const planet = new Planet(
      planetId++,
      name,
      date,
      color1,
      color2,
      population,
      naturalResources,
      numberHumanSettlements,
      location,
      communication,
      planetRuler
    );
    planetsList.add(planet);
    setAllPlanets(planetsList.getAll());
    concatDate();
    setUpdateOn(false);

    clearInputs();
  };

  const deletePlanet = (id) => {
    planetsList.remove(id);
    setAllPlanets(planetsList.getAll());
  };

  const updatePlanet = () => {
    name = data.name;
    date = data.date;
    color1 = data.color1;
    color2 = data.color2;
    population = data.population;
    naturalResources = data.naturalResources;
    numberHumanSettlements = data.numberHumanSettlements;
    location = data.location;
    communication = data.communication;
    planetRuler = data.planetRuler;
    resetDate();
    deletePlanet(data.id);
    const planet = new Planet(
      planetId++,
      name,
      date,
      color1,
      color2,
      population,
      naturalResources,
      numberHumanSettlements,
      location,
      communication,
      planetRuler
    );

    planetsList.add(planet);
    clearInputs();
    setUpdateOn(false);
  };

  const clearInputs = () => {
    setName("");
    setDate("");
    setColor1("");
    setColor2("");
    setPopulation("");
    setNaturalResources("");
    setNumberHumanSettlements("");
    setLocation("");
    setCommunication("");
    setPlanetRuler("");
  };

  return (
    <View style={styles.container}>
      <Title title="Create Planet" />
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={name}
          onChangeText={setName}
          placeholderTextColor={styles.placeholder.color}
        />
        <View style={styles.dateInputs}>
          <TextInput
            style={styles.inputDate}
            placeholder="Day"
            value={day}
            onChangeText={setDay}
            keyboardType="numeric"
            limit={2}
            maxLength={2}
          />
          <TextInput
            style={styles.inputDate}
            placeholder="Month"
            value={month}
            onChangeText={setMonth}
            keyboardType="numeric"
            limit={2}
            maxLength={2}
          />
          <TextInput
            style={styles.inputDate}
            placeholder="Year"
            value={year}
            onChangeText={setYear}
            keyboardType="numeric"
            limit={4}
            maxLength={4}
          />
        </View>
        <ColorInput selectedColor={color1} />
        <ColorInput selectedColor={color2} />
        <TextInput
          style={styles.input}
          placeholder="Population"
          value={population}
          onChangeText={setPopulation}
          placeholderTextColor={styles.placeholder.color}
        />
        <TextInput
          style={styles.input}
          placeholder="Natural Resources"
          value={naturalResources}
          onChangeText={setNaturalResources}
          placeholderTextColor={styles.placeholder.color}
        />
        <TextInput
          style={styles.input}
          placeholder="Number of Human Settlements"
          value={numberHumanSettlements}
          onChangeText={setNumberHumanSettlements}
          placeholderTextColor={styles.placeholder.color}
        />
        <TextInput
          style={styles.input}
          placeholder="Location"
          value={location}
          onChangeText={setLocation}
          placeholderTextColor={styles.placeholder.color}
        />
        <TextInput
          style={styles.input}
          placeholder="Communication"
          value={communication}
          onChangeText={setCommunication}
          placeholderTextColor={styles.placeholder.color}
        />
        <TextInput
          style={styles.input}
          placeholder="Planet Ruler"
          value={planetRuler}
          onChangeText={setPlanetRuler}
          placeholderTextColor={styles.placeholder.color}
        />
      </View>
      {updateOn ? (
        <TouchableOpacity style={styles.button} onPress={updatePlanet()}>
          <Text>Update Planet</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.button} onPress={createPlanet}>
          <Text>Create Planet</Text>
        </TouchableOpacity>
      )}

      <View style={styles.listPlanets}>
        {allPlanets.map((planet) => (
          <View key={planet.id} style={styles.planet}>
            <Text>{planet.name}</Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Planets", { data: planet });
              }}
            >
              <Text>Details</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={deletePlanet(planet.id)}>
              <Text>Delete</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </View>
  );
}
