import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  width: 100%;
  height: 100%;
  background: #c0c0c0;
  justify-content: center;
`;
export const Header = styled.View`
  padding: 60px 24px 60px;
  background: #8b0000;
  flex-direction: row;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 36px;
  line-height: 50px;
  font-weight: bold;
  color: #f0f0f5;
  padding-right: 10px;
`;
export const FavoriteContainer = styled.TouchableOpacity``;

export const FavoritesName = styled.Text`
  color: #000;
  width: 100%;
  font-weight: bold;
  font-size: 26px;
  text-align: center;
`;
export const FavoritesImg = styled.Image`
  width: 100%;
  height: 300px;
`;

export const ButtonRemove = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
`;

export const Footer = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: #a9a9a9;
`;
export const BackToMain = styled.TouchableOpacity`
  margin-left: 15px;
`;

export const ButtonCategory = styled.TouchableOpacity`
  margin-right: 15px;
`;
