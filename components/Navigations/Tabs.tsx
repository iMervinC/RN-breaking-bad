import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Characters, Deaths, Episodes, Quotes } from '../../screens'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

const Tab = createBottomTabNavigator()

const Tabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#0f910f',
        inactiveTintColor: 'black',
        showLabel: false,
      }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, focused, size }) => {
          let iconName: string
          if (route.name === 'Characters') {
            iconName = 'user-astronaut'
            size = focused ? 30 : 20
          }
          if (route.name === 'Episodes') {
            iconName = 'layer-group'
            size = focused ? 30 : 20
          }
          if (route.name === 'Quotes') {
            iconName = 'quote-right'
            size = focused ? 30 : 20
          }
          if (route.name === 'Deaths') {
            iconName = 'skull'
            size = focused ? 30 : 20
          }
          return <FontAwesome5 name={iconName!} color={color} size={size} />
        },
      })}
    >
      <Tab.Screen component={Characters} name="Characters" />
      <Tab.Screen component={Episodes} name="Episodes" />
      <Tab.Screen component={Quotes} name="Quotes" />
      <Tab.Screen component={Deaths} name="Deaths" />
    </Tab.Navigator>
  )
}

export { Tabs }
