import React, { useCallback, useState } from 'react';
import { Alert, FlatList, View, ActivityIndicator } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';

import SearchInput from '../../components/index';

import {
  Container,
  Header,
  ButtonSearch,
  Title,
  CategoryContainer,
  HeaderTitle,
  CategoryImg,
  CategoryInfo,
  Footer,
  BackToMain,
  ButtonFavorites,
} from './styles';
import api from '../../services/api';

const SearchRecipes = ({ navigation }) => {
  const [ingredients, setIngredients] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [loading, setLoading] = useState(false);

  const loadIngredients = useCallback(() => {
    setLoading(true);
    api
      .get(`search.php?s=${searchValue}`)
      .then((response) => {
        setIngredients(response.data.meals);
      })
      .catch((err) => {
        Alert.alert(`Ocorreu um erro${err}`);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [searchValue]);

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
      </Header>

      <View style={{ flexDirection: 'row-reverse' }}>
        <SearchInput
          value={searchValue}
          onChangeText={(text) => setSearchValue(text)}
          placeholder="Qual receita você procura?"
        />

        <ButtonSearch onPress={loadIngredients}>
          <Icon name="pageview" size={36} color="#af0000" />
        </ButtonSearch>
      </View>

      {loading && (
        <View style={{ alignItems: 'center', marginTop: 100 }}>
          <ActivityIndicator size={50} animating color="#af0000" />
        </View>
      )}

      <FlatList
        data={ingredients}
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
        <BackToMain onPress={() => navigation.navigate('Main')}>
          <Icon name="home" size={36} color="#af0000" />
        </BackToMain>
        <ButtonFavorites onPress={() => navigation.navigate('Favorites')}>
          <Icon name="favorite" size={36} color="#af0000" />
        </ButtonFavorites>
      </Footer>
    </Container>
  );
};

SearchRecipes.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

export default SearchRecipes;
