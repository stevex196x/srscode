import { render, screen } from '@/test-utils';
import { QuestionTable } from './QuestionTable';

const oneQuestion: any = { title: 'TwoSum' };

describe('QuestionTable component', () => {
  it('it has correct number of problems in the grid section', () => {
    render(<QuestionTable data={oneQuestion} />);
    expect(screen.getByRole('grid').children.length).toEqual(150);
  });
});
