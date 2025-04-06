import { StyleSheet } from 'react-native';
import { SCREEN_PADDING } from '../../constants/screen-padding';

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingHorizontal: SCREEN_PADDING.horizontal,
    paddingVertical: SCREEN_PADDING.vertical,
  },
});
