import React from 'react';
import { View, TouchableOpacity, StyleSheet, Platform, Alert } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Block } from '../components';
import { useData, useTheme, useTranslation } from '../hooks';
import Screens from './Screens';
import Svg, { Path, Polyline, Rect, Circle } from 'react-native-svg';

const Tab = createBottomTabNavigator();

export default function Menu() {
  const { isDark } = useData();
  const { colors, gradients } = useTheme();
  const { t } = useTranslation();

  const assets = {
    home: (
      <Svg width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <Path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <Polyline points="9 22 9 12 15 12 15 22" />
      </Svg>
    ),
    components: (
      <Svg width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <Rect x="3" y="3" width="7" height="7" rx="1" />
        <Rect x="14" y="3" width="7" height="7" rx="1" />
        <Rect x="14" y="14" width="7" height="7" rx="1" />
        <Rect x="3" y="14" width="7" height="7" rx="1" />
      </Svg>
    ),
    plus: (
      <Svg width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <Path d="M5 12h14" />
        <Path d="M12 5v14" />
      </Svg>
    ),
    chat: (
      <Svg width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <Path d="M7.9 20.9l-5.6-5.6A5 5 0 0 1 2 12V6a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v7a5 5 0 0 1-1.5 3.5L13.1 20.9A2 2 0 0 1 10.3 22h-1a2 2 0 0 1-1.4-.6z" />
      </Svg>
    ),
    users: (
      <Svg width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <Path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <Circle cx="9" cy="7" r="4" />
        <Path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <Path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </Svg>
    ),
  };

  const tabs = [
    { route: 'HomeTab', initial: 'Home', labelKey: 'screens.home', icon: assets.home },
    { route: 'ExploreTab', initial: 'Explore', labelKey: 'screens.explore', icon: assets.components },
    { route: 'Create', labelKey: 'screens.create', icon: assets.plus },
    { route: 'ArticlesTab', initial: 'Articles', labelKey: 'screens.articles', icon: assets.chat },
    { route: 'ProfileTab', initial: 'Profile', labelKey: 'screens.profile', icon: assets.users },
  ];

  return (
    <Block gradient={isDark ? gradients.dark : gradients.light} style={{ flex: 1 }}>
      <Tab.Navigator
        initialRouteName="HomeTab"
        screenOptions={{ headerShown: false }}
        tabBar={(props) => <CustomTabBar {...props} tabs={tabs} />}
      >
        {tabs
          .filter((t) => t.route !== 'Create')
          .map((tab) => (
            <Tab.Screen
              key={tab.route}
              name={tab.route}
              options={{ title: tab.initial || tab.route }}
            >
              {() => <Screens initialRouteName={tab.initial} />}
            </Tab.Screen>
          ))}
      </Tab.Navigator>
    </Block>
  );
}

function CustomTabBar({ state, navigation, tabs }) {
  const { colors } = useTheme();
  const insets = useSafeAreaInsets();
  const { t } = useTranslation();

  const TAB_BAR_HEIGHT = 60;
  const bottomPadding = insets.bottom || (Platform.OS === 'ios' ? 20 : 10);

  // Calculate visible tabs (skip Create)
  const visibleTabs = tabs.filter((t) => t.route !== 'Create');

  return (
    <View
      pointerEvents="box-none"
      style={[styles.tabBar, { backgroundColor: colors.card, height: TAB_BAR_HEIGHT + bottomPadding, paddingBottom: bottomPadding }]}
    >
      {tabs.map((tab, index) => {
        const isCreate = tab.route === 'Create';
        const adjustedIndex = isCreate ? null : visibleTabs.findIndex((t) => t.route === tab.route);
        const focused = adjustedIndex !== null && state.index === adjustedIndex;

        if (isCreate) {
          return (
            <TouchableOpacity
              key={tab.route}
              activeOpacity={0.85}
              style={[styles.createButton, { backgroundColor: colors.primary, shadowColor: colors.primary }]}
              onPress={() => Alert.alert(t(tab.labelKey), t('common.action'))}
              hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
            >
              {React.cloneElement(tab.icon, { stroke: colors.white })}
            </TouchableOpacity>
          );
        }

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: tab.route,
            canPreventDefault: true,
          });

          if (!event.defaultPrevented) navigation.navigate(tab.route);
        };

        return (
          <TouchableOpacity
            key={tab.route}
            style={styles.tabButton}
            onPress={onPress}
            activeOpacity={0.7}
            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
          >
            <View style={{ alignItems: 'center' }}>
              {focused && <View style={[styles.focusDot, { backgroundColor: colors.primary }]} />}
              <View style={{ marginTop: focused ? 4 : 8 }}>
                {React.cloneElement(tab.icon, {
                  stroke: focused ? colors.primary : colors.text,
                  opacity: focused ? 1 : 0.45,
                })}
              </View>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: -3 },
    shadowRadius: 5,
    elevation: 10,
  },
  tabButton: { flex: 1, alignItems: 'center' },
  createButton: {
    position: 'absolute',
    top: -35,
    width: 65,
    height: 65,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.4,
    shadowRadius: 6,
    elevation: 10,
  },
  focusDot: { position: 'absolute', top: -6, width: 6, height: 6, borderRadius: 3 },
});
