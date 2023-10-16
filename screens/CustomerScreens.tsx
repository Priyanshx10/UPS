import React, { useLayoutEffect, useState } from 'react';
import { useTailwind } from 'tailwind-rn/dist';
import { CompositeNavigationProp, useNavigation } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs/lib/typescript/src/types';
import { TabStackParaList } from '../navigator/TabNavigator';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigator/RootNavigator';
import { Image, ActivityIndicator, ScrollView, View } from 'react-native';
import { useQuery } from '@apollo/client';
import { GET_CUSTOMERS } from '../graphql/queries';
import CustomerCard from '../components/CustomerCard';
import { Input } from '@rneui/themed';

export type CustomerScreeensNavigationProps = CompositeNavigationProp<
  BottomTabNavigationProp<TabStackParaList, 'Customers'>,
  NativeStackNavigationProp<RootStackParamList>
>;

interface CustomerResponse {
  name: string;
  value: {
    email: string;
    name: string;
  };
}

const CustomerScreens = () => {
  const tw = useTailwind();
  const navigation = useNavigation<CustomerScreeensNavigationProps>();
  const [input, setInput] = useState<string>("");
  const { loading, error, data } = useQuery(GET_CUSTOMERS);

  useLayoutEffect(() => { 
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <ScrollView style={{ backgroundColor: '#59C1CC' }}>
    <View style={tw("w-full h-64")}>
        <Image
          source={{ uri: "https://links.papareact.com/3jc" }}
          style={{ width: '100%', height: '100%' }}/>
          <ActivityIndicator style={{ position: 'absolute', top: '50%', left: '50%' }}/>
      </View>


      <Input
        placeholder='Search By Customer'
        value={input}
        onChangeText={setInput}
        containerStyle={tw('bg-white pt-5 pb-5 px-10')}
      />

      {data?.getCustomers
      ?.filter((customer : CustomerList) =>
      customer.value.name.includes(input)
      )
      
      .map(
        ({ name: ID, value: { email, name } }: CustomerResponse) => (
        <CustomerCard key={ID} email={email} name={name} userId={ID} />
      )
      )}
    </ScrollView>
  );
};

export default CustomerScreens; 
