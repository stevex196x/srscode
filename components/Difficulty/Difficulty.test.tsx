import { render, screen } from '@/test-utils';
import { Difficulty } from './Difficulty';

describe('Difficulty component', () => {
  it('should be green if the difficulty is easy', () => {
    render(<Difficulty variant="easy" />);

    const difficulty = screen.getByText('EASY');
    expect(difficulty).toHaveStyle('color: var(--mantine-color-green-text)');
  });

  it('should be orange if the difficulty is medium', () => {
    render(<Difficulty variant="medium" />);

    const difficulty = screen.getByText('MEDIUM');
    expect(difficulty).toHaveStyle('color: var(--mantine-color-orange-text)');
  });

  it('should be red if the difficulty is hard', () => {
    render(<Difficulty variant="hard" />);

    const difficulty = screen.getByText('HARD');
    expect(difficulty).toHaveStyle('color: var(--mantine-color-red-text)');
  });
});
