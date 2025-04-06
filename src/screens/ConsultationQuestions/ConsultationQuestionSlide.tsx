import { Alert, useWindowDimensions, View } from 'react-native';
import { Title } from '../../components/Title/Title';
import type { Question } from '../../types/question';
import { styles } from './ConsultationQuestions.style';
import { Text } from '../../components/Text/Text';
import { SelectionBox } from '../../components/SelectionBox/SelectionBox';
import { useCallback, useMemo } from 'react';
import { SCREEN_PADDING } from '../../constants/screen-padding';
import { Button } from '../../components/Button/Button';

export type QuestionAnswer = {
  questionText: string;
  questionId: number;
  answer: string;
};

type Props = {
  question: Question;
  storeAnswer: (answer: QuestionAnswer) => void;
  scrollTo: (nextOrPrev: 'next' | 'prev') => void;
  isFirstQuestion: boolean;
  isLastQuestion: boolean;
  submitAnswers: () => void;
};

const DELAY = 150;

export const ConsultationQuestionSlide = ({
  question,
  storeAnswer,
  scrollTo,
  isFirstQuestion,
  isLastQuestion,
  submitAnswers,
}: Props) => {
  const { width: screenWidth } = useWindowDimensions();

  const handleAnswerPress = useCallback(
    (answer: string) => {
      storeAnswer({
        questionText: question.text,
        questionId: question.id,
        answer,
      });

      if (isLastQuestion) {
        Alert.alert(
          'Thank you for your answers',
          'We will get back to you soon.',
        );
        submitAnswers();
        return;
      }

      // Delay scroll a little to allow user to see selection
      // before moving to the next question
      setTimeout(() => scrollTo('next'), DELAY);
    },
    [
      isLastQuestion,
      question.id,
      question.text,
      scrollTo,
      storeAnswer,
      submitAnswers,
    ],
  );

  const options = useMemo(
    () => [
      {
        id: 0,
        text: 'Yes',
        onPress: () => handleAnswerPress('Yes'),
      },
      {
        id: 1,
        text: 'No',
        onPress: () => handleAnswerPress('No'),
      },
    ],
    [handleAnswerPress],
  );

  const handleBackPress = useCallback(() => scrollTo('prev'), [scrollTo]);

  return (
    <View
      style={[
        styles.questionSlide,
        { width: screenWidth - SCREEN_PADDING.horizontal * 2 },
      ]}>
      <Title>{question.text}</Title>
      {!!question.notes &&
        question.notes.map((note) => <Text key={note.id}>{note.text}</Text>)}
      <SelectionBox options={options} />
      <View style={styles.spacer} />
      {!isFirstQuestion && <Button onPress={handleBackPress}>Go back</Button>}
    </View>
  );
};
