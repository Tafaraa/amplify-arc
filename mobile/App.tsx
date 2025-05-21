import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import { ThemeProvider, useThemeContext } from './src/contexts/ThemeContext';

// Import screens
import HomeScreen from './src/screens/HomeScreen';
import ServicesScreen from './src/screens/ServicesScreen';
import PricingScreen from './src/screens/PricingScreen';
import PortfolioScreen from './src/screens/PortfolioScreen';
import ContactScreen from './src/screens/ContactScreen';
import QuoteScreen from './src/screens/QuoteScreen';

// Create navigation stacks
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// Bottom tab navigator
const MainTabs = () => {
  const { theme } = useThemeContext();
  
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: string = 'apps-outline';

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Services') {
            iconName = focused ? 'list' : 'list-outline';
          } else if (route.name === 'Pricing') {
            iconName = focused ? 'pricetag' : 'pricetag-outline';
          } else if (route.name === 'Portfolio') {
            iconName = focused ? 'briefcase' : 'briefcase-outline';
          } else if (route.name === 'Contact') {
            iconName = focused ? 'mail' : 'mail-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#B6FF00',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          backgroundColor: theme === 'dark' ? '#121212' : '#FFFFFF',
          borderTopColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
        },
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Services" component={ServicesScreen} />
      <Tab.Screen name="Pricing" component={PricingScreen} />
      <Tab.Screen name="Portfolio" component={PortfolioScreen} />
      <Tab.Screen name="Contact" component={ContactScreen} />
    </Tab.Navigator>
  );
};

// Main stack navigator
const MainStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="MainTabs" component={MainTabs} />
      <Stack.Screen name="Quote" component={QuoteScreen} />
    </Stack.Navigator>
  );
};

// Navigation container with theme context
const AppNavigationContainer = () => {
  const { theme } = useThemeContext();
  
  return (
    <NavigationContainer>
      <MainStack />
      <StatusBar style={theme === 'dark' ? 'light' : 'dark'} />
    </NavigationContainer>
  );
};

// Main App component
export default function App() {
  return (
    <ThemeProvider>
      <SafeAreaProvider>
        <AppNavigationContainer />
      </SafeAreaProvider>
    </ThemeProvider>
  );
}
