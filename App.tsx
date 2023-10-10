
import {  SafeAreaView, Text, View } from 'react-native';
import {TailwindProvider} from 'tailwind-rn';
import utilities from './tailwind.json';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './navigator/RootNavigator';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://localhost:5000/api/ungaged-jellyfish',
  cache: new InMemoryCache(),
});

export default function App() {
  return (
    //@ts-ignore
    <TailwindProvider utilities={utilities}>
      <ApolloProvider client={client}>
      <NavigationContainer>
        <RootNavigator/>
      </NavigationContainer>
      </ApolloProvider>
    </TailwindProvider>
  );
}

