import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const getFavorites = async () => {
  const result = await AsyncStorage.getItem('@FavoritesKey');
  const favorites = result ? JSON.parse(result) : [];

  return favorites;
};

export const removeFavorite = async (item) => {
  const favorites = await getFavorites();

  const newFavorites = favorites.filter(
    (favorite) => favorite.idMeal !== item.idMeal
  );

  await AsyncStorage.setItem('@FavoritesKey', JSON.stringify(newFavorites));
};

export const addFavorite = async (instruction) => {
  try {
    let favorites = await AsyncStorage.getItem('@FavoritesKey');

    if (favorites) {
      favorites = JSON.parse(favorites);
    } else {
      favorites = [];
    }

    const favoriteExist = favorites.find(
      (favorite) => favorite.idMeal === instruction.idMeal
    );

    if (favoriteExist) {
      Alert.alert('Já está adicionado aos favoritos');
      return;
    }

    favorites.push({
      idMeal: instruction.idMeal,
      strMeal: instruction.strMeal,
      strMealThumb: instruction.strMealThumb,
    });

    await AsyncStorage.setItem('@FavoritesKey', JSON.stringify(favorites));

    Alert.alert('Adicionado aos favoritos com sucesso!');
  } catch (e) {
    Alert.alert('Falha ao adicionar aos favoritos');
  }
};

export const checkIsFavorite = async (instruction) => {
  const favorites = await getFavorites();
  const exists = favorites.some(
    (favorite) => favorite.idMeal === instruction.idMeal
  );

  return exists;
};
