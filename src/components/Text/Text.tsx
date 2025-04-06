import { Text as RNText, TextProps } from 'react-native';

type Props = TextProps;

export const Text = (props: Props) => {
  return <RNText {...props} />;
};
