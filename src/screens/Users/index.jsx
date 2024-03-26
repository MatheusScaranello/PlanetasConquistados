import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { FaTrash, FaPen } from "react-icons/fa";

import styles from "./styles";
import Title from "../../components/Title";
import TouchButton from "../../components/TouchButton";
import ColorInput from "../../components/ColorInput/index.jsx";

import Planet from "../../models/planet/Planent.js";
import PlanetsRepository from "../../models/planet/PlanentRepository";
import { useNavigation } from "@react-navigation/native";

const planetsList = new PlanetsRepository();

let planetId = 1;

export default function Users() {
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

  const [allPlanets, setAllPlanets] = useState([]);

  const concatDate = () => {
    setDate(`${day}/${month}/${year}`);
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

    clearInputs();
  };

  const deletePlanet = (id) => {
    planetsList.remove(id);
    setAllPlanets(planetsList.getAll());
  };

  const updatePlanet = (id) => {
    const planet = new Planet(
      id,
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
    planetsList.update(planet);
    setAllPlanets(planetsList.getAll());
    clearInputs();
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
        />
        <View style={styles.dateInputs}>
          <TextInput
            style={styles.inputDate}
            placeholder="Day"
            value={day}
            onChangeText={setDay}
            keyboardType="numeric"
            limit={2}
          />
          <TextInput
            style={styles.inputDate}
            placeholder="Month"
            value={month}
            onChangeText={setMonth}
            keyboardType="numeric"
            limit={2}
          />
          <TextInput
            style={styles.inputDate}
            placeholder="Year"
            value={year}
            onChangeText={setYear}
            keyboardType="numeric"
            limit={4}
          />
        </View>
        <ColorInput selectedColor={color1} />
        <ColorInput selectedColor={color2} />
        <TextInput
          style={styles.input}
          placeholder="Population"
          value={population}
          onChangeText={setPopulation}
        />
        <TextInput
          style={styles.input}
          placeholder="Natural Resources"
          value={naturalResources}
          onChangeText={setNaturalResources}
        />
        <TextInput
          style={styles.input}
          placeholder="Number of Human Settlements"
          value={numberHumanSettlements}
          onChangeText={setNumberHumanSettlements}
        />
        <TextInput
          style={styles.input}
          placeholder="Location"
          value={location}
          onChangeText={setLocation}
        />
        <TextInput
          style={styles.input}
          placeholder="Communication"
          value={communication}
          onChangeText={setCommunication}
        />
        <TextInput
          style={styles.input}
          placeholder="Planet Ruler"
          value={planetRuler}
          onChangeText={setPlanetRuler}
        />
      </View>
      {
        updateOn ? (
          <TouchableOpacity style={styles.button} onPress={updatePlanet()}>
            <Text>Update Planet</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.button} onPress={createPlanet}>
        <Text>Create Planet</Text>
      </TouchableOpacity>
        )
      }
      

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
              <FaTrash />
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </View>
  );
}
