import { render, screen } from '@/test-utils';
import { QuestionCard } from './QuestionCard';

const questionCardTestInput: any = {
  title: 'Two Sum',
  url: 'https://leetcode.com/problems/two-sum/description/',
};

describe('Question card link', () => {
  it('should contain the question name as the first text', () => {
    render(<QuestionCard {...questionCardTestInput} />);

    const link = screen.getByRole('link');
    expect(link).toHaveTextContent('Two Sum');
  });

  it('should contain the href to the leetcode problem', () => {
    render(<QuestionCard {...questionCardTestInput} />);

    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', 'https://leetcode.com/problems/two-sum/description/');
  });
});
