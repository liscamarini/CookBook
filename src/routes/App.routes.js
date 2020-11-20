import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Main from '../pages/Main';
import Dashboard from '../pages/Dashboard';
import SearchRecipes from '../pages/SearchRecipes';
import Recipes from '../pages/Recipes';
import Instructions from '../pages/Instruction';
import Favorites from '../pages/Favorites';

const App = createStackNavigator();

const AppRoutes = () => (
  <App.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#312e38' },
    }}
  >
    <App.Screen name="Main" component={Main} />
    <App.Screen name="Dashboard" component={Dashboard} />
    <App.Screen name="SearchRecipes" component={SearchRecipes} />
    <App.Screen name="Recipes" component={Recipes} />
    <App.Screen name="Instructions" component={Instructions} />
    <App.Screen name="Favorites" component={Favorites} />
  </App.Navigator>
);

export default AppRoutes;
