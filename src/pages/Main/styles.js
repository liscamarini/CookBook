import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #8b0000;
`;
export const Header = styled.View`
  padding: 60px 60px 60px;

  flex-direction: row-reverse;
`;

export const Title = styled.Text`
  font-size: 50px;
  line-height: 50px;
  color: #fff;
  text-align: center;
`;

export const LogoFood = styled.Image`
  width: 100%;
  height: 350px;
  align-items: center;
`;
export const ButtonFoodIn = styled.TouchableOpacity`
  border-radius: 8px;
  flex-direction: row-reverse;
  align-items: center;
  margin-top: 26px;

  background: #ffc0cb;
`;

export const ButtonFoodText = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #1c1c1c;
  flex: 1;
  text-align: center;
`;

export const IconContainer = styled.View`
  margin-top: 26px;
`;
