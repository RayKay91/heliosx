import { Image, View } from 'react-native';
import { styles } from './Header.style';

export const Header = () => {
  return (
    <View style={styles.header}>
      <Image
        source={require('../../assets/images/med-express-logo.png')}
        style={styles.image}
        resizeMode="contain"
      />
    </View>
  );
};
