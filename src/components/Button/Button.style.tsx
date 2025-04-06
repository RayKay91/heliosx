import { StyleSheet } from 'react-native';
import { theme } from '../../theme';
import { MIN_TOUCHABLE_SIZE } from '../../constants/min-touchable-size';

export const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 12,
    width: '100%',
    minHeight: MIN_TOUCHABLE_SIZE,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: theme.light.surfaceRegular,
  },
});
