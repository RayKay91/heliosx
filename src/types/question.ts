type QuestionNote = { text: string; id: number };

export type Question = {
  id: number;
  text: string;
  notes?: QuestionNote[];
};
