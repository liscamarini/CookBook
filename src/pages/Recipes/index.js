import React, { useCallback, useEffect, useState } from 'react';
import { Alert, FlatList } from 'react-native';

import { useRoute } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';

import {
  Container,
  Header,
  Title,
  CategoryContainer,
  HeaderTitle,
  CategoryImg,
  CategoryInfo,
  Footer,
  ButtonBack,
  ButtonFavorites,
  ButtonSearch,
} from './styles';
import api from '../../services/api';

const Recipes = ({ navigation }) => {
  const route = useRoute();

  const [recipes, setRecipes] = useState([]);

  const loadRecipes = useCallback((category) => {
    api
      .get(`filter.php?c=${category}`)
      .then((response) => {
        setRecipes(response.data.meals);
      })
      .catch((err) => {
        Alert.alert(`Ocorreu um erro${err}`);
      });
  }, []);

  useEffect(() => {
    const { category } = route.params;
    loadRecipes(category);
  }, [loadRecipes, route.params]);

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
        <Title>Receitas</Title>
        <Icon name="fastfood" size={40} color="#f0f0f5" />
      </Header>

      <FlatList
        data={recipes}
        keyExtractor={(item) => item.idMeal}
        renderItem={({ item }) => (
          <CategoryContainer onPress={() => navigateToInstruction(item)}>
            <CategoryInfo>
              <CategoryImg source={{ uri: item.strMealThumb }} />
              <HeaderTitle>{item.strMeal}</HeaderTitle>
            </CategoryInfo>
          </CategoryContainer>
        )}
      />

      <Footer>
        <ButtonBack onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={36} color="#af0000" />
        </ButtonBack>

        <ButtonFavorites onPress={() => navigation.navigate('Favorites')}>
          <Icon name="favorite" size={36} color="#af0000" />
        </ButtonFavorites>

        <ButtonSearch onPress={() => navigation.navigate('SearchRecipes')}>
          <Icon name="search" size={36} color="#af0000" />
        </ButtonSearch>
      </Footer>
    </Container>
  );
};

Recipes.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
    goBack: PropTypes.func,
  }).isRequired,
};

export default Recipes;
