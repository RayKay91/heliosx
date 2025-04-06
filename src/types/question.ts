type QuestionNote = { text: string };

export type Question = {
  text: string;
  notes?: QuestionNote[];
};
