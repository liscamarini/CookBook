import React, { useEffect, useState, useCallback } from 'react';

import { FlatList } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import PropTypes from 'prop-types';

import { getFavorites, removeFavorite } from '../../utils/favoritesHelper';

import {
  Container,
  Header,
  Title,
  FavoriteContainer,
  FavoritesName,
  FavoritesImg,
  ButtonRemove,
  Footer,
  BackToMain,
  ButtonCategory,
} from './styles';

const Favorites = ({ navigation }) => {
  const [favorites, setFavorites] = useState([]);

  const loadFavorites = useCallback(async () => {
    const result = await getFavorites();
    setFavorites(result);
  }, []);

  useEffect(() => {
    loadFavorites();
  }, [loadFavorites]);

  const deleteFavorites = useCallback(
    async (item) => {
      await removeFavorite(item);
      loadFavorites();
    },
    [loadFavorites]
  );

  const navigateToInstruction = useCallback(
    (recipe) => {
      const { idMeal } = recipe;

      navigation.navigate('Instructions', { recipe: idMeal });
    },
    [navigation]
  );

  return (
    <Container>
      <Header>
        <Title>Favoritos</Title>
        <Icon name="fastfood" size={40} color="#f0f0f5" />
      </Header>

      <FlatList
        data={favorites}
        keyExtractor={(item) => item.idMeal}
        renderItem={({ item }) => (
          <FavoriteContainer onPress={() => navigateToInstruction(item)}>
            <FavoritesName>{item.strMeal}</FavoritesName>
            <FavoritesImg source={{ uri: item.strMealThumb }} />
            <ButtonRemove
              onPress={() => {
                deleteFavorites(item);
              }}
            >
              <Icon name="delete-forever" size={36} color="#af0000" />
            </ButtonRemove>
          </FavoriteContainer>
        )}
      />
      <Footer>
        <BackToMain onPress={() => navigation.navigate('Main')}>
          <Icon name="home" size={36} color="#af0000" />
        </BackToMain>

        <ButtonCategory onPress={() => navigation.navigate('Dashboard')}>
          <Icon name="dashboard" size={36} color="#af0000" />
        </ButtonCategory>
      </Footer>
    </Container>
  );
};

Favorites.propTypes = {
  navigation: PropTypes.shape({
    goBack: PropTypes.func,
    navigate: PropTypes.func,
  }).isRequired,
};

export default Favorites;
