import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

import styles from "./styles";
import Title from "../../components/Title";
import ColorInput from "../../components/ColorInput/index.jsx";

import Planet from "../../models/planet/Planent.js";
import PlanetsRepository from "../../models/planet/PlanentRepository";
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";

const planetsList = new PlanetsRepository();

let planetId = 1;

export default function Users({ route }) {
  const { data, edit } = route.params;

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
  const [updateOn, setUpdateOn] = useState(edit);

  useEffect(() => {
    if (edit) {
      setName(data.name);
      setDate(data.date);
      setColor1(data.color1);
      setColor2(data.color2);
      setPopulation(data.population);
      setNaturalResources(data.naturalResources);
      setNumberHumanSettlements(data.numberHumanSettlements);
      setIsUpdate(true);
    } else {
      clearInputs();
    }
  }, [data, edit]);

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
      planetId,
      name,
      concatDate(),
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
    planetId++;
    clearInputs();
  };

  const deletePlanet = (id) => {
    planetsList.remove(id);
    setAllPlanets(planetsList.getAll());
  };

  const updatePlanet = () => {
    const planet = new Planet(
      data.id,
      name,
      concatDate(),
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
    setUpdateOn(false);

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
    setDay("");
    setMonth("");
    setYear("");
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
            placeholderTextColor={styles.placeholder.color}
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
            placeholderTextColor={styles.placeholder.color}
          />
          <TextInput
            style={styles.inputDate}
            placeholder="Year"
            value={year}
            onChangeText={setYear}
            keyboardType="numeric"
            limit={4}
            maxLength={4}
            placeholderTextColor={styles.placeholder.color}
          />
        </View>
        <View style={styles.colors}>
          <ColorInput selectedColor={color1} />
          <ColorInput selectedColor={color2} />
        </View>
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
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            createPlanet();
          }}
        >
          <Text>Create Planet</Text>
        </TouchableOpacity>
      )}

      <View style={styles.listPlanets}>
        {allPlanets.map((planet) => (
          <View style={styles.planet} key={planet.id}>
            <TouchableOpacity
              key={planet.id}
              style={styles.planetButton}
              onPress={() => {
                navigation.navigate("Planets", { data: planet });
              }}
            >
              <Text style={styles.planetText}>{planet.name}</Text>
            </TouchableOpacity>

            <TouchableOpacity
              key={planet.id}
              style={styles.planetButton}
              onPress={() => {
                deletePlanet(planet.id);
              }}
            >
              <Text style={styles.planetText}>Delete</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </View>
  );
}
