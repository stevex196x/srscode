import { QuestionRowProps } from '../QuestionTable';

export function Neetcode() {
  const problems: QuestionRowProps[] = [
    {
      id: '1',
      title: 'Concatenation of Array',
      url: 'https://leetcode.com/problems/concatenation-of-array/',
      difficulty: 'easy',
    },
    {
      id: '2',
      title: 'Contains Duplicate',
      url: 'https://leetcode.com/problems/contains-duplicate/',
      difficulty: 'easy',
    },
  ];
  return problems;
}
