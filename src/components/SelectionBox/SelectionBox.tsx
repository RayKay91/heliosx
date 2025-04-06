import { View, Pressable } from 'react-native';
import { Text } from '../Text/Text';
import { styles } from './SelectionBox.style';
import { useState } from 'react';

type SelectionBoxOption = {
  id: number;
  text: string;
  onPress?: () => void;
};

type Props = {
  options: SelectionBoxOption[];
};

export const SelectionBox = ({ options }: Props) => {
  const [selectedOption, setSelectedOption] = useState<
    SelectionBoxOption | undefined
  >(undefined);

  const handlePress = (option: SelectionBoxOption) => {
    setSelectedOption(option);
    option.onPress?.();
  };

  return (
    <View style={styles.optionsWrapper}>
      {options.map((option) => (
        <Pressable
          accessibilityRole="radio"
          accessibilityState={{ selected: selectedOption?.id === option.id }}
          onPress={() => handlePress(option)}
          key={option.id}
          style={[
            styles.optionContainer,
            selectedOption?.id === option.id && styles.selectedOption,
          ]}>
          <Text
            style={[
              styles.text,
              selectedOption?.id === option.id && styles.selectedText,
            ]}>
            {option.text}
          </Text>
        </Pressable>
      ))}
    </View>
  );
};
