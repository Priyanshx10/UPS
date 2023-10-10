import { useLayoutEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CustomerScreens from '../screens/CustomerScreens';
import OrderScreen from '../screens/OrderScreen';
import { useNavigation } from '@react-navigation/native';
import { Icon } from '@rneui/base';

export type TabStackParaList = {
 Orders: undefined;
 Customers: undefined;   
}

 const Tab = createBottomTabNavigator<TabStackParaList>();

const TabNavigator = () => {
    const Navigation = useNavigation();

    useLayoutEffect(() => {
      Navigation.setOptions({
        headerShown: false,
      })
    }, []);
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
        tabBarActiveColor:"red",
        tabBarInactiveTintColor: "gray",
        tabBarIcon: ({ focused,color,size}) => {
            if(route.name === "Customers"){
                return (
                <Icon
                name='users'
                type='entypo'
                color={ focused ? "blue" : " gray"}
                />
                )
               
            } else if (route.name === "Orders"){
                return(
                    <Icon
                name='box'
                type='entypo'
                color={ focused ? "red" : " gray"}
                />
                )
            }
        }
    })}>
      <Tab.Screen name='Customers' component={CustomerScreens}/>
      <Tab.Screen name='Orders' component={OrderScreen}/>
    </Tab.Navigator>
  )
}

export default TabNavigator