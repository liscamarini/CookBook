import React, { useEffect, useState, useCallback } from 'react';
import { Alert, FlatList } from 'react-native';

import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  Header,
  Title,
  CategoryContainer,
  CategoryName,
  CategoryAvatar,
  BackToMain,
  ButtonFavorites,
  ButtonCategory,
  Footer,
} from './styles';
import api from '../../services/api';

const Dashboard = ({ navigation }) => {
  const [catalogFood, setCatalogFood] = useState([]);

  useEffect(() => {
    api
      .get('categories.php')
      .then((response) => {
        setCatalogFood(response.data.categories);
      })
      .catch((err) => {
        Alert.alert(`Ocorreu um erro${err}`);
      });
  }, []);

  const navigateToCategory = useCallback(
    (category) => {
      const { strCategory } = category;

      navigation.navigate('Recipes', { category: strCategory });
    },
    [navigation]
  );

  const navigateToSearch = useCallback(
    (ingredient) => {
      const { strCategory } = ingredient;

      navigation.navigate('SearchRecipes', { ingredient: strCategory });
    },
    [navigation]
  );

  return (
    <Container>
      <Header>
        <Title>Categorias</Title>
        <Icon name="fastfood" size={40} color="#f0f0f5" />
      </Header>

      <FlatList
        data={catalogFood}
        keyExtractor={(item) => item.idCategory}
        renderItem={({ item }) => (
          <CategoryContainer onPress={() => navigateToCategory(item)}>
            <CategoryName>{item.strCategory}</CategoryName>
            <CategoryAvatar source={{ uri: item.strCategoryThumb }} />
          </CategoryContainer>
        )}
      />

      <Footer>
        <BackToMain onPress={() => navigation.goBack()}>
          <Icon name="home" size={36} color="#af0000" />
        </BackToMain>

        <ButtonFavorites onPress={() => navigation.navigate('Favorites')}>
          <Icon name="favorite" size={36} color="#af0000" />
        </ButtonFavorites>
        <ButtonCategory onPress={() => navigateToSearch('SearchRecipes')}>
          <Icon name="search" size={36} color="#af0000" />
        </ButtonCategory>
      </Footer>
    </Container>
  );
};

Dashboard.propTypes = {
  navigation: PropTypes.shape({
    goBack: PropTypes.func,
    navigate: PropTypes.func,
  }).isRequired,
};

export default Dashboard;
