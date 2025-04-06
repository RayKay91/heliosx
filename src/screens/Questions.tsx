import { Screen } from '../components/Screen/Screen';
import { ScrollView } from 'react-native';
import { getQuestions } from '../api/questions/get-questions';
import { QuestionSlide, type QuestionAnswer } from './QuestionSlide';
import { useCallback, useRef } from 'react';

export const Questions = () => {
  const answers = useRef<Record<QuestionAnswer['questionId'], QuestionAnswer>>(
    {},
  ).current;
  const storeAnswer = useCallback(
    (answer: QuestionAnswer) => {
      answers[answer.questionId] = answer;
    },
    [answers],
  );
  const questions = getQuestions();
  return (
    <Screen>
      <ScrollView horizontal pagingEnabled>
        {questions.map((question) => (
          <QuestionSlide
            key={question.id}
            question={question}
            storeAnswer={storeAnswer}
          />
        ))}
      </ScrollView>
    </Screen>
  );
};
