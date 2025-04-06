import { useWindowDimensions, View } from 'react-native';
import { Title } from '../components/Title/Title';
import type { Question } from '../types/question';
import { styles } from './Questions.style';
import { Text } from '../components/Text/Text';
import { SelectionBox } from '../components/SelectionBox/SelectionBox';
import { useMemo } from 'react';
import { SCREEN_PADDING } from '../constants/screen-padding';

export type QuestionAnswer = {
  questionText: string;
  questionId: number;
  questionAnswerAffirmative: boolean;
};

type Props = {
  question: Question;
  storeAnswer: (answer: QuestionAnswer) => void;
};

export const QuestionSlide = ({ question, storeAnswer }: Props) => {
  const { width: screenWidth } = useWindowDimensions();
  const options = useMemo(
    () => [
      {
        id: 0,
        text: 'Yes',
        onPress: () => {
          storeAnswer({
            questionText: question.text,
            questionId: question.id,
            questionAnswerAffirmative: true,
          });
        },
      },
      {
        id: 1,
        text: 'No',
        onPress: () => {
          storeAnswer({
            questionText: question.text,
            questionId: question.id,
            questionAnswerAffirmative: false,
          });
        },
      },
    ],
    [question.id, question.text, storeAnswer],
  );

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
    </View>
  );
};
