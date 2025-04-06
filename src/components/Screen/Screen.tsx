import type { PropsWithChildren } from 'react';
import { View } from 'react-native';
import { styles } from './Screen.style';

type Props = PropsWithChildren<{}>;

export const Screen = ({ children }: Props) => {
  return <View style={styles.screen}>{children}</View>;
};
