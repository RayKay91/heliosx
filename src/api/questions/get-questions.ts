// This is where we'd define the function to retrieve the questions prefarably from a CMS
// or BFF layer for flexibility in terms of what we'd need to ask the user.
// For now I'll just use a static list of questions.

import type { Question } from '../../types/question';

export const getQuestions = (): Question[] => {
  return [
    {
      id: 0,
      text: 'Are you aged between 18-65?',
    },
    {
      id: 1,

      text: 'Do you experience migraines for more than 10 days a month?',
    },
    {
      id: 2,
      text: 'Do your migraines last less than 4 hours without treatment or last longer than 24 hours?',
    },
    {
      id: 3,
      text: 'Do your migraines follow a broadly similar pattern each time?',
    },
    {
      id: 4,
      text: 'Are you experiencing any of the following along with your migraine?',
      notes: [
        { id: 0, text: 'Nausea' },
        { id: 1, text: 'Vomiting' },
        { id: 2, text: 'Sensitivity to light' },
        { id: 3, text: 'Sensitivity to sound' },
        { id: 4, text: 'Sensitivity to smell' },
      ],
    },
  ];
};
