import { Screen } from '../components/Screen/Screen';
import {
  ScrollView,
  type LayoutChangeEvent,
  type NativeScrollEvent,
  type NativeSyntheticEvent,
} from 'react-native';
import { getQuestions } from '../api/questions/get-questions';
import { QuestionSlide, type QuestionAnswer } from './QuestionSlide';
import { useCallback, useRef } from 'react';
import { SCROLL_EVENT_THROTTLE } from '../constants/scroll-event-throttle';

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

  const scrollViewRef = useRef<ScrollView>(null);
  const scrollViewPosition = useRef(0);
  const scrollViewWidth = useRef<number | undefined>(undefined);

  const handleScroll = useCallback(
    ({ nativeEvent }: NativeSyntheticEvent<NativeScrollEvent>) => {
      scrollViewPosition.current = nativeEvent.contentOffset.x;
    },
    [],
  );

  const scrollTo = useCallback(
    (nextOrPrev: 'next' | 'prev') => {
      if (!scrollViewRef.current || !scrollViewWidth.current) {
        return;
      }

      const x =
        nextOrPrev === 'next'
          ? scrollViewWidth.current + scrollViewPosition.current
          : scrollViewPosition.current - scrollViewWidth.current;

      scrollViewRef.current.scrollTo({
        x,
        animated: true,
      });
    },
    [scrollViewRef],
  );

  const handleLayout = useCallback(({ nativeEvent }: LayoutChangeEvent) => {
    scrollViewWidth.current = nativeEvent.layout.width;
  }, []);

  const handleSubmit = useCallback(() => {
    console.log(answers);
  }, [answers]);

  return (
    <Screen>
      <ScrollView
        onLayout={handleLayout}
        onScroll={handleScroll}
        scrollEventThrottle={SCROLL_EVENT_THROTTLE}
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        scrollEnabled={false}>
        {questions.map((question, i) => (
          <QuestionSlide
            key={question.id}
            question={question}
            storeAnswer={storeAnswer}
            scrollTo={scrollTo}
            isFirstQuestion={i === 0}
            isLastQuestion={i === questions.length - 1}
            submitAnswers={handleSubmit}
          />
        ))}
      </ScrollView>
    </Screen>
  );
};
