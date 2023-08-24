import { React } from "react";
import { View, Text, StatusBar, StyleSheet } from "react-native";

import { Feather } from "@expo/vector-icons";
import { WeatherType } from "../utilities/WeatherType";
import moment from "moment";

const Item = (props) => {
  const { dt_txt, min, max, condition } = props;
  const { item, temp, date, dayTextWrapper } = styles;
  return (
    <View style={item}>
      <StatusBar backgroundColor={"transparent"} />
      <Feather name={WeatherType[condition]?.icon} size={50} color={"black"} />
      <View style={styles.dayTextWrapper}>
        <Text style={date}>{moment(dt_txt).format("dddd")}</Text>
        <Text style={date}>{moment(dt_txt).format("h:mm:ss a")}</Text>
      </View>
      <Text style={temp}>{`${Math.round(min)}°/ ${Math.round(max)}°`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderWidth: 5,
    backgroundColor: "indianred",
  },
  temp: {
    color: "white",
    fontSize: 20,
  },
  date: {
    color: "white",
    fontSize: 15,
  },
  dayTextWrapper: {
    flexDirection: "column",
  },
});

export default Item;
