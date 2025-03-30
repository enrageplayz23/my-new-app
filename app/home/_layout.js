import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

// Screens
import HomeScreen from './index';
import NotificationScreen from './notification'; // create this later
import ComplaintScreen from './complaint'; // create this later
import HistoryScreen from './history'; // create this later
import AccountScreen from './account'; // create this later

const Tab = createBottomTabNavigator();

export default function Layout() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: styles.tabBar,
        tabBarLabelStyle: styles.label,
        tabBarActiveTintColor: '#FE712D',
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'HOME',
          tabBarIcon: ({ color, size }) => <Ionicons name="home-outline" size={22} color={color} />,
        }}
      />
      <Tab.Screen
        name="notification"
        component={NotificationScreen}
        options={{
          tabBarLabel: 'NOTIFICATION',
          tabBarIcon: ({ color, size }) => <Ionicons name="notifications-outline" size={22} color={color} />,
        }}
      />
      <Tab.Screen
        name="complaint"
        component={ComplaintScreen}
        options={{
          tabBarLabel: 'Complaint/Request',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account-alert-outline" size={26} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="history"
        component={HistoryScreen}
        options={{
          tabBarLabel: 'HISTORY',
          tabBarIcon: ({ color, size }) => <Ionicons name="time-outline" size={22} color={color} />,
        }}
      />
      <Tab.Screen
        name="account"
        component={AccountScreen}
        options={{
          tabBarLabel: 'ACCOUNT',
          tabBarIcon: ({ color, size }) => <Ionicons name="person-outline" size={22} color={color} />,
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#FFFBFC',
    borderTopColor: '#ccc',
    height: 70,
    paddingBottom: 10,
    paddingTop: 8,
  },
  label: {
    fontSize: 10,
    marginTop: 4,
  },
});
