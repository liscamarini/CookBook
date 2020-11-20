import React, { useState, useCallback } from 'react';

import { TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import { Container } from './styles';

const SearchInput = ({ value = '', ...rest }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    setIsFilled(!!value);
  }, [value]);

  return (
    <Container isFocused={isFocused}>
      <Icon
        name="search"
        size={20}
        color={isFocused || isFilled ? '#C72828' : '#B7B7CC'}
      />

      <TextInput
        placeholderTextColor="#808080"
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        value={value}
        style={{ fontSize: 20, color: '#000' }}
        testID="search-input"
        {...rest}
      />
    </Container>
  );
};

export default SearchInput;
