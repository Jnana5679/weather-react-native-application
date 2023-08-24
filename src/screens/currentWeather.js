import { React, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Button,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { WeatherType } from "../utilities/WeatherType";
import RowText from "../components/rowText";

const CurrentWeather = ({ weatherData }) => {
  const [buttonClicked, setButtonCicked] = useState(false);
  const {
    wrapper,
    container,
    tempStyles,
    feelsLike,
    highLowContainer,
    highLow,
    bodyWrapper,
    description,
    message,
  } = styles;
  const {
    main: { temp, feels_like, temp_max, temp_min },
    weather,
  } = weatherData;

  const weatherCondition = weather[0]?.main;

  return (
    <SafeAreaView
      style={[
        wrapper,
        { backgroundColor: WeatherType[weatherCondition]?.backgroundColor },
      ]}
    >
      <StatusBar backgroundColor={"#a2c4fa"} />
      <View style={container}>
        <Feather
          name={WeatherType[weatherCondition]?.icon}
          size={100}
          color="white"
        />
        <Text>Weather Application</Text>
        <Text style={tempStyles}>{temp}°C</Text>
        <Text style={feelsLike}>{`Feels like ${feels_like}`}</Text>
        <RowText
          message1={`High : ${temp_max}`}
          message2={`Low : ${temp_min}`}
          containerStyles={highLowContainer}
          message1Styles={highLow}
          message2Styles={highLow}
        />
      </View>
      <RowText
        message1={weather[0]?.description}
        message2={WeatherType[weatherCondition]?.message}
        containerStyles={bodyWrapper}
        message1Styles={description}
        message2Styles={message}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  tempStyles: {
    fontSize: 40,
  },
  highLowContainer: {
    flexDirection: "row",
  },
  feelsLike: {
    fontSize: 30,
  },
  highLow: {
    fontSize: 20,
  },
  bodyWrapper: {
    justifyContent: "flex-end",
    alignItems: "flex-start",
    paddingLeft: 25,
    marginBottom: 40,
  },
  description: {
    fontSize: 35,
  },
  message: {
    fontSize: 25,
  },
});

export default CurrentWeather;
