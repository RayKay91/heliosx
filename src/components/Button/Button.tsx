import { useCallback } from 'react';
import {
  Pressable,
  type PressableStateCallbackType,
  PressableProps,
} from 'react-native';
import { styles } from './Button.style';
import { theme } from '../../theme';
import { Text } from '../Text/Text';

type Props = Omit<PressableProps, 'children'> & { children: string };

export const Button = ({ children, ...props }: Props) => {
  const getStyles = useCallback(({ pressed }: PressableStateCallbackType) => {
    return [
      styles.button,
      {
        backgroundColor: pressed
          ? theme.light.primaryDark
          : theme.light.primaryRegular,
      },
    ];
  }, []);

  return (
    <Pressable disabled={props.disabled} style={getStyles} {...props}>
      <Text
        style={[
          styles.text,
          props.disabled && { color: theme.light.disabledText },
        ]}>
        {children}
      </Text>
    </Pressable>
  );
};
