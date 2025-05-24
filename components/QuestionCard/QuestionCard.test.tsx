import { render, screen } from '@/test-utils';
import { QuestionCard } from './QuestionCard';

const questionCardTestInput: any = {
  title: 'This is a test',
};

describe('Question card component', () => {
  it('should contain the question name as the first text', () => {
    render(<QuestionCard {...questionCardTestInput} />);

    const title = screen.getByRole('paragraph');
    expect(title).toBeDefined();
    expect(title).toHaveTextContent('This is a test');
  });
});
