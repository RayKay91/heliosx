import { View } from 'react-native';
import { Screen } from '../../components/Screen/Screen';
import { Text } from '../../components/Text/Text';
import { Button } from '../../components/Button/Button';
import { useCallback } from 'react';
import { styles } from './Welcome.style';
import { Title } from '../../components/Title/Title';

type Props = {
  navToConsultationQuestions: () => void;
};

export const Welcome = ({ navToConsultationQuestions }: Props) => {
  const startConsultation = useCallback(() => {
    navToConsultationQuestions();
  }, [navToConsultationQuestions]);

  return (
    <Screen>
      <View style={styles.container}>
        <Title>Hello, welcome to the MedExpress app!</Title>
        <Text>Press the button below to start your consultation</Text>
        <View style={styles.spacer} />
        <Button onPress={startConsultation}>Start Consultation</Button>
      </View>
    </Screen>
  );
};
