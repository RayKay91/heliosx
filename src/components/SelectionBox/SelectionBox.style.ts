import { StyleSheet } from 'react-native';
import { theme } from '../../theme';
import { MIN_TOUCHABLE_SIZE } from '../../constants/min-touchable-size';

export const styles = StyleSheet.create({
  optionsWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: MIN_TOUCHABLE_SIZE,
    columnGap: 5,
  },
  optionContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor: theme.light.surfaceRegular,
    borderWidth: 1,
    borderColor: theme.light.primaryDark,
    borderRadius: 8,
  },
  selectedOption: {
    backgroundColor: theme.light.primaryDark,
  },
  text: {
    color: theme.light.primaryDark,
    fontSize: 16,
    fontWeight: '500',
  },
  selectedText: {
    color: theme.light.surfaceRegular,
  },
});
