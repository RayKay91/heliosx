import { useCallback, useState } from 'react';
import { SafeAreaView } from 'react-native';
import { styles } from './App.style';
import { Header } from './components/Header/Header';
import { Welcome } from './screens/Welcome/Welcome';
import { ConsultationQuestions } from './screens/ConsultationQuestions/ConsultationQuestions';
import type { Screens } from './types/navigation';

function App() {
  const [screen, setScreen] = useState<Screens>('welcome');
  const navToConsultationQuestions = useCallback(() => {
    setScreen('consultation-questions');
  }, []);
  return (
    <SafeAreaView style={styles.appWrapper}>
      <Header />
      {screen === 'welcome' && (
        <Welcome navToConsultationQuestions={navToConsultationQuestions} />
      )}
      {screen === 'consultation-questions' && <ConsultationQuestions />}
    </SafeAreaView>
  );
}

export default App;
