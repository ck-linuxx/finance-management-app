import { HomeIcon } from 'components/icons/homeIcon';
import { ProfileIcon } from 'components/icons/profileIcon';
import TabBar from 'components/TabBar';
import { Tabs } from 'expo-router';
import React from 'react';

export default function TabLayout() {

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#052224",
        headerShown: false,
        animation: 'shift',
        tabBarStyle: {
          backgroundColor: "#F1FFF3",
        },
      }}>
        <Tabs.Screen
          name="index"
          key="index"
          options={{
            title: '',
            tabBarIcon: ({ color }) => <HomeIcon color={color} />,
          }}
        />
        <Tabs.Screen
          name="profilePage"
          key="profilePage"
          options={{
            title: '',
            tabBarIcon: ({ color }) => <ProfileIcon color={color} />,
          }}
        />
    </Tabs>
  );
}
