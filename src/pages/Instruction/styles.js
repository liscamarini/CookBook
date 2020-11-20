import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #c0c0c0;
`;

export const Header = styled.View`
  padding: 30px 20px 30px;
  background: #8b0000;
  flex-direction: row-reverse;
  align-items: center;
`;

export const MealsInfo = styled.View`
  align-items: center;
  justify-content: center;
`;

export const HeaderTitle = styled.Text`
  color: #8b0000;
  font-size: 30px;
  text-align: center;
  font-weight: bold;
  margin-top: 20px;
`;
export const MealsImg = styled.Image`
  width: 400px;
  height: 400px;
  border-radius: 20px;
  margin-bottom: 20px;
`;
export const MealsArea = styled.Text`
  color: #dc143c;
  font-size: 26px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 10px;
`;
export const MealsInstructions = styled.Text`
  color: #3c3c3c;
  font-size: 16px;

  margin-bottom: 10px;
`;
export const MealsVideo = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #0070ff;
  text-decoration: underline;
`;
export const MealsIngredients = styled.Text`
  color: #dc143c;
  font-size: 26px;
  font-weight: bold;
  margin-bottom: 10px;
  margin-top: 10px;
`;

export const MealsIngredientsText = styled.Text`
  color: #3c3c3c;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
  position: relative;
`;

export const Footer = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #a9a9a9;
`;
export const BackToMain = styled.TouchableOpacity`
  padding-left: 10px;
`;

export const ButtonFavorite = styled.TouchableOpacity``;

export const ButtonCategory = styled.TouchableOpacity`
  padding-right: 10px;
`;
