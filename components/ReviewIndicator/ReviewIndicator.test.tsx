import { render, screen } from '@/test-utils';
import { ReviewIndicator } from './ReviewIndicator';

describe('ReviewIndicator component', () => {
  it('should be invisible if the question has not been done yet', () => {
    render(<ReviewIndicator />);

    const okReviewIndicator = screen.queryByText('OK');
    const koReviewIndicator = screen.queryByText('Needs Review');
    expect(okReviewIndicator).toBeNull();
    expect(koReviewIndicator).toBeNull();
  });

  it('should have a red badge if the question is due to be reviewed', () => {
    const past = new Date();
    past.setDate(past.getDate() - 5);
    render(<ReviewIndicator dueDate={past} />);

    const koReviewIndicator = screen.queryByText('Review');
    expect(koReviewIndicator).toBeTruthy();
  });

  it('should have a green badge if the question does not need to be reviewed', () => {
    const future = new Date();
    future.setDate(future.getDate() + 5);
    render(<ReviewIndicator dueDate={future} />);

    const okReviewIndicator = screen.queryByText('OK');
    expect(okReviewIndicator).toBeTruthy();
  });
});
