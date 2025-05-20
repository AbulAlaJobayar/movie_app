import TabIcon from "@/src/components/TabIcon";
import { Tabs } from "expo-router";
import React from "react";

const _Layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarItemStyle:{
            width:"100%",
            height:"100%",
            justifyContent:"center",
            alignItems:"center"

        },
        tabBarStyle:{
            backgroundColor:"#0f0D23",
            borderRadius:50,
            marginHorizontal:20,
            marginBottom:36,
            height:52,
            position:"absolute",
            overflow:'hidden',
            borderWidth:1,
            borderColor:"#0f0d23"
        }
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon="home" name="Home" />
          ),
        }}
      />

      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            // <Icon name="magnify" color={color} size={size} />
            <TabIcon focused={focused} icon="magnify" name="Search" />
          ),
        }}
      />
      <Tabs.Screen
        name="saved"
        options={{
          title: "Saved",
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => (
            <TabIcon focused={focused} icon="bookmark" name="Saved" />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => (
            <TabIcon focused={focused} icon="account" name="Profile" />
          ),
        }}
      />
    </Tabs>
  );
};

export default _Layout;
