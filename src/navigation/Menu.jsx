import React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Screens from './Screens';
import { Block, Image } from '../components';
import { useData, useTheme, useTranslation } from '../hooks';

const Tab = createBottomTabNavigator();

/* bottom tab navigation (replaces drawer) */
export default () => {
  const { gradients } = useTheme();
  const { isDark } = useData();
  const { assets, colors, sizes } = useTheme();
  const { t } = useTranslation();

  // define tabs that map to the stack's initial screens
  const tabs = [
    { name: 'Home', label: t('screens.home'), icon: assets.home },
    { name: 'Components', label: t('screens.components'), icon: assets.components },
    { name: 'Articles', label: t('screens.articles'), icon: assets.book },
    { name: 'Profile', label: t('screens.profile'), icon: assets.profile },
  ];

  return (
    <Block gradient={isDark ? gradients.dark : gradients.light}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false, // keep inner stack headers from Screens
          tabBarActiveTintColor: colors.primary,
          tabBarInactiveTintColor: colors.text,
          tabBarStyle: {
            backgroundColor: colors.card,
            borderTopColor: 'transparent',
            height: 60,
            paddingBottom: 6,
          },
          tabBarIcon: ({ color, size }) => {
            // find icon for the route
            const match = tabs.find((t) => t.name === route.name);
            if (!match) return null;
            return (
              <Image
                radius={0}
                width={18}
                height={18}
                source={match.icon}
                color={color}
              />
            );
          },
        })}
      >
        {tabs.map((tab) => (
          <Tab.Screen
            key={tab.name}
            name={tab.name}
            // each tab renders the same Stack but with the initial route set
            component={() => <Screens initialRouteName={tab.name} />}
            options={{ tabBarLabel: tab.label }}
          />
        ))}
      </Tab.Navigator>
    </Block>
  );
};
