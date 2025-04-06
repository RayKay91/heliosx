import { SafeAreaView } from 'react-native';
import { Questions } from './screens/Questions';
import { styles } from './App.style';

function App() {
  return (
    <SafeAreaView style={styles.appWrapper}>
      <Questions />
    </SafeAreaView>
  );
}

export default App;
