import React, { useLayoutEffect, useState } from 'react';
import { View, Text, ScrollView, Image, Button, ActivityIndicator } from 'react-native';
import { useTailwind } from 'tailwind-rn';
import { CompositeNavigationProp } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import useOrders from '../hooks/useOrders';
import { RootStackParamList } from '../navigator/RootNavigator';
import { TabStackParaList } from '../navigator/TabNavigator';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import OrderCard from '../components/OrderCard';

type OrdersScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabStackParaList, 'Orders'>,
  NativeStackNavigationProp<RootStackParamList>
>;

const OrdersScreen = () => {
  const tw = useTailwind();
  const navigation = useNavigation<OrdersScreenNavigationProp>();
  const [loading, error, orders] = useOrders();
  const [ascending, setAscending] = useState<boolean>(false);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
      tabBarLabel: ({ focused, color }) => (
        <Text style={{ color: focused ? '#EB6A7C' : color, fontSize: 10 }}>
          Orders
        </Text>
      ),
    });
  }, []);

  return (
    <ScrollView style={{ backgroundColor: '#EB6A7C' }}>
      <Image
        source={{ uri: 'https://links.papareact.com/m51' }}
        style={tw('w-full h-64')}
        PlaceholderContent={<ActivityIndicator />}
      />

      <View >
        <Button
          color="pink"
          titleStyle={{ color: 'gray', fontWeight: '400' }}
          style={tw('py-2 px-5')}
          onPress={() => setAscending(!ascending)}
          title={ascending ? 'Showing: Oldest First' : 'Showing: Most Recent First'}
        />

        {orders
          ?.sort((a: { createdAt: string | number | Date; }, b: { createdAt: string | number | Date; }) => {
            if (ascending) {
              return new Date(a.createdAt) > new Date(b.createdAt) ? 1 : -1;
            } else {
              return new Date(a.createdAt) < new Date(b.createdAt) ? 1 : -1;
            }
          })
          .map((order: { trackingId: any; }) => (
            <OrderCard key={order.trackingId} item={order} />
          ))}
      </View>
    </ScrollView>
  );
};

export default OrdersScreen;
