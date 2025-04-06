import { Text as RNText, TextProps } from 'react-native';
import { styles } from './Text.style';

type Props = TextProps;

export const Text = (props: Props) => {
  return <RNText style={[styles.text, props.style]} {...props} />;
};
