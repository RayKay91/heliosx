import { TextProps } from 'react-native';
import { Text } from '../Text/Text';
import { styles } from './Title.style';

type Props = TextProps;

export const Title = ({ children }: Props) => {
  return <Text style={styles.title}>{children}</Text>;
};
