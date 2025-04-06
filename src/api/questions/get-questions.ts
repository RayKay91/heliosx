// This is where we'd define the function to retrieve the questions prefarably from a CMS
// or BFF layer for flexibility in terms of what we'd need to ask the user.
// For now I'll just use a static list of questions.

import type { Question } from '../../types/question';

export const getQuestions = (): Question[] => {
  return [
    {
      text: 'Are you aged between 18-65?',
    },
    {
      text: 'Do you experience migraines for more than 10 days a month?',
    },
    {
      text: 'Do your migraines last less than 4 hours without treatment or last longer than 24 hours?',
    },
    {
      text: 'Do your migraines follow a broadly similar pattern each time?',
    },
    {
      text: 'Are you experiencing any of the following along with your migraine?',
      notes: [
        { text: 'Nausea' },
        { text: 'Vomiting' },
        { text: 'Sensitivity to light' },
        { text: 'Sensitivity to sound' },
        { text: 'Sensitivity to smell' },
      ],
    },
  ];
};
