import {  ActivityIndicator, ScrollView } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { useTailwind } from 'tailwind-rn/dist';
import { CompositeNavigationProp, useNavigation } from '@react-navigation/native';
import {  BottomTabNavigationProp } from '@react-navigation/bottom-tabs/lib/typescript/src/types';
import { TabStackParaList } from '../navigator/TabNavigator';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParaList } from '../navigator/RootNavigator';
import { Image } from '@rneui/themed';
import { Input } from '@rneui/base';

export type CustomerScreeensNavigationProps = CompositeNavigationProp<
 BottomTabNavigationProp<TabStackParaList ,"Customers">,
 NativeStackNavigationProp<RootStackParaList>
> 

const CustomerScreens = () => {
    const tw = useTailwind();
    const navigation = useNavigation<CustomerScreeensNavigationProps>();
    const [input ,setInput] = useState<String>("");

    useLayoutEffect(() => {
      navigation.setOptions({
        headerShown: false
      })
    }, [])
  return (
    <ScrollView style= {{ backgroundColor: 'orange'}}>
     <Image
      source={ {uri : "https://links.papareact.com/3jc"}}
      containerStyle={tw("w-full h-64")}
      PlaceholderContent={<ActivityIndicator/>}
      />
      

    <Input placeholder='Search By Customer'
      value={input} 
      onChangeText={setInput}
      containerStyle={tw('bg-white pt-05 pb-0 px-10')}
    />
    </ScrollView>
  )
}

export default CustomerScreens