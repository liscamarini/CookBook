import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import PropTypes from 'prop-types';

import {
  Container,
  Header,
  LogoFood,
  Title,
  IconContainer,
  ButtonFoodIn,
  ButtonFoodText,
} from './styles';
import ImgFood from '../../assets/food.png';

const Main = ({ navigation }) => {
  return (
    <Container>
      <Header>
        <Title>CookBook</Title>
        <Icon name="restaurant-menu" size={40} color="#f0f0f5" />
      </Header>

      <LogoFood source={ImgFood} />

      <IconContainer>
        <ButtonFoodIn onPress={() => navigation.navigate('Dashboard')}>
          <Icon name="food-bank" size={40} color="#8B0000" />
          <ButtonFoodText>Acessar Receitas</ButtonFoodText>
        </ButtonFoodIn>
      </IconContainer>
    </Container>
  );
};

Main.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

export default Main;
