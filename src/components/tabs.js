import { React } from "react";
import UpcomingWeather from "../screens/upComingWeather";
import City from "../screens/City";
import CurrentWeather from "../screens/currentWeather";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const Tabs = (props) => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "grey",
        tabBarStyle: { backgroundColor: "#38a1d1" },
        headerStyle: { backgroundColor: "#38a1d1" },
        headerTitleStyle: {
          fontWeight: "bold",
          fontSize: 25,
          color: "tomato",
        },
      }}
    >
      <Tab.Screen
        name={"current"}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name={"droplet"}
              size={25}
              color={focused ? "tomato" : "black"}
            />
          ),
        }}
      >
        {() => <CurrentWeather weatherData={props.weather.list[0]} />}
      </Tab.Screen>
      <Tab.Screen
        name={"upcoming"}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name={"clock"}
              size={25}
              color={focused ? "tomato" : "black"}
            />
          ),
        }}
      >
        {() => <UpcomingWeather weatherData={props.weather.list} />}
      </Tab.Screen>
      <Tab.Screen
        name={"city"}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name={"home"}
              size={25}
              color={focused ? "tomato" : "black"}
            />
          ),
        }}
      >
        {() => <City weatherData={props.weather.city} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

export default Tabs;
