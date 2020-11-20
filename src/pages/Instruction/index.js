import React, { useCallback, useEffect, useState } from 'react';
import { Alert, ScrollView } from 'react-native';

import { useRoute } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';

import {
  addFavorite,
  removeFavorite,
  checkIsFavorite,
} from '../../utils/favoritesHelper';

import api from '../../services/api';

import {
  Container,
  Header,
  HeaderTitle,
  MealsImg,
  MealsInfo,
  MealsIngredients,
  MealsIngredientsText,
  MealsInstructions,
  MealsVideo,
  MealsArea,
  Footer,
  BackToMain,
  ButtonFavorite,
  ButtonCategory,
} from './styles';

const Instructions = ({ navigation }) => {
  const route = useRoute();

  const [instruction, setInstruction] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false);

  const handleCheck = useCallback(async (data) => {
    const check = await checkIsFavorite(data);
    setIsFavorite(check);
  }, []);

  useEffect(() => {
    if (instruction) {
      handleCheck(instruction);
    }
  }, [instruction, handleCheck]);

  const loadInstruction = useCallback(async (recipe) => {
    api
      .get(`lookup.php?i=${recipe}`)
      .then((response) => {
        const result = response.data.meals[0];
        setInstruction(result);
      })
      .catch((err) => {
        Alert.alert(`Ocorreu um erro${err}`);
      });
  }, []);

  useEffect(() => {
    const { recipe } = route.params;

    setInstruction(null);
    loadInstruction(recipe);

    // handleCheck();
  }, [loadInstruction, route.params]);

  const renderItemsIngredients = useCallback(() => {
    const arrItems = [];

    for (let i = 1; i <= 20; i += 1) {
      const ingredient = instruction[`strIngredient${i}`];

      if (ingredient) {
        const value = instruction[`strMeasure${i}`];

        arrItems.push(
          <MealsIngredientsText key={`ing-${i}`}>
            {value} - {ingredient}
          </MealsIngredientsText>
        );
      }
    }

    return arrItems;
  }, [instruction]);

  const saveFavorites = useCallback(async () => {
    if (isFavorite) {
      await removeFavorite(instruction);
      Alert.alert('Removido dos favoritos');
    } else {
      await addFavorite(instruction);
      await checkIsFavorite(instruction);
    }

    setIsFavorite(!isFavorite);
  }, [isFavorite, instruction]);

  return (
    <Container>
      <Header>
        <Icon
          name={isFavorite ? 'favorite' : 'favorite-border'}
          size={36}
          color="#c0c0c0"
          onPress={() => saveFavorites()}
        />
      </Header>

      {instruction && (
        <ScrollView>
          <MealsInfo>
            <HeaderTitle>{instruction.strMeal}</HeaderTitle>
            <MealsImg source={{ uri: instruction.strMealThumb }} />
            <MealsArea>{instruction.strArea}</MealsArea>
            <MealsInstructions>{instruction.strInstructions}</MealsInstructions>
            <MealsVideo>{instruction.strYoutube}</MealsVideo>
            <MealsIngredients>Ingredientes</MealsIngredients>
          </MealsInfo>

          {renderItemsIngredients()}
        </ScrollView>
      )}
      <Footer>
        <BackToMain onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={36} color="#af0000" />
        </BackToMain>

        <ButtonFavorite onPress={() => navigation.navigate('Favorites')}>
          <Icon name="favorite" size={36} color="#af0000" />
        </ButtonFavorite>

        <ButtonCategory onPress={() => navigation.navigate('Dashboard')}>
          <Icon name="dashboard" size={36} color="#8B0000" />
        </ButtonCategory>
      </Footer>
    </Container>
  );
};

Instructions.propTypes = {
  navigation: PropTypes.shape({
    goBack: PropTypes.func,
    navigate: PropTypes.func,
  }).isRequired,
};

export default Instructions;
