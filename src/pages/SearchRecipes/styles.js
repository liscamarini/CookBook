import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #c0c0c0;
  justify-content: center;
`;
export const Header = styled.View`
  padding: 60px 24px 60px;
  background: #8b0000;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ButtonSearch = styled.TouchableOpacity`
  position: absolute;
  flex-direction: row;
  margin-top: -5px;
  padding-right: 20px;
`;

export const Title = styled.Text`
  font-size: 36px;
  font-weight: bold;
  color: #e7e5e4;
`;

export const CategoryContainer = styled.TouchableOpacity`
  background: #c0c0c0;
  border-radius: 10px;
  margin-bottom: 20px;
`;
export const CategoryInfo = styled.View`
  align-items: center;
  flex-direction: row;
`;

export const CategoryImg = styled.Image`
  width: 120px;
  height: 120px;
  border-radius: 36px;
`;

export const HeaderTitle = styled.Text`
  color: #8b0000;
  font-size: 26px;
  font-weight: bold;
  margin-left: 20px;
  margin-right: 20px;
`;

export const Footer = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #a9a9a9;
`;
export const BackToMain = styled.TouchableOpacity`
  margin-left: 15px;
`;

export const ButtonFavorites = styled.TouchableOpacity`
  margin-right: 15px;
`;
