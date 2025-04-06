import type { QuestionAnswer } from '../../screens/ConsultationQuestions/ConsultationQuestionSlide';

export const postQuestionAnswers = (
  answers: Record<QuestionAnswer['questionId'], QuestionAnswer>,
) => {
  console.log(answers);
};
