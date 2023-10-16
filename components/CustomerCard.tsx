import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useTailwind } from 'tailwind-rn';
import { useNavigation } from '@react-navigation/native';
import { CustomerScreeensNavigationProps } from '../screens/CustomerScreens';
import useCustomerOrder from '../hooks/useCustomerOrder';
import { Card ,Icon } from '@rneui/themed';
import { CardDivider } from '@rneui/base/dist/Card/Card.Divider';

type Props = {
  userId: string;
  name: string;
  email: string;
};

const CustomerCard = ({ email, name, userId }: Props) => {
  const { loading, error, orders } = useCustomerOrder(userId);
  const tw = useTailwind();
  const navigation = useNavigation<CustomerScreeensNavigationProps>();

  return (
    <TouchableOpacity onPress={() => navigation.navigate('MyModal')}>
      <Card containerStyle={tw('p-5 rounded-lg')}>
        <View>
          <View style={tw("flex-row justify-between")}> 
            <View>
              <Text style= {tw("text-2xl font-bold")}>{name}</Text>
              <Text style= {[tw("text-sm"),{ color : "#59C1CC" }]}>
              ID: {userId}
              </Text>
            </View>

          <View style={tw("flex-row items-center justify-end")}>
            <Text style={{ color: '#59C1CC'}}>
              {loading ? "Loading..." : `${orders.length} x`}
            </Text>
            
            <Icon
              style={tw("mb-5 ml-auto")}
               name="box"
               type ="entypo"
               color="#59C1CC"
               size={50}
               />
          </View>
        </View>
        </View>
        <CardDivider/>
        <Text>{email}</Text>
      </Card>
    </TouchableOpacity>
  );
};

export default CustomerCard;
