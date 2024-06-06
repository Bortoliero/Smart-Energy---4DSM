import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Login from './pages/login';
import Cadastro from './pages/cadastro';
import Grafico from './pages/graficos'

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
          <Stack.Screen
            name="login"
            component={Login}
            options={{
              title: 'LOGIN',
              headerTitleAlign: 'center',
              headerStyle: {
                backgroundColor: '#02A724',
              },
              headerTitleStyle: {
                fontWeight: 'bold',
                color: '#fff',
              },
            }}
          />
          <Stack.Screen
            name="grafico"
            component={Grafico}
            options={{
              title: 'Smart Energy',
              headerTitleAlign: 'center',
              headerStyle: {
                backgroundColor: '#02A724',
              },
              headerTitleStyle: {
                fontWeight: 'bold',
                color: '#fff',
              },
            }}
          />
        <Stack.Screen
          name="cadastro"
          component={Cadastro}
          options={{
            title: 'Cadastrar',
            headerTitleAlign: 'center',
            headerTintColor: '#fff',
            headerStyle: {
              backgroundColor: '#02A724',
            },
            headerTitleStyle: {
              fontWeight: 'bold',
              color: '#fff',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
