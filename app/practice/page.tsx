import { Title } from '@mantine/core';
import { QuestionRowProps, QuestionTable } from '@/components/QuestionTable/QuestionTable';

export default function HomePage() {
  const now = new Date();
  const past = new Date(now.getTime() - 10000);
  const future = new Date(now.getTime() + 500000);
  const test: QuestionRowProps[] = [
    { title: 'Two Sum', url: 'lmao', difficulty: 'easy' },
    { title: 'Three Sum', url: 'lmao', difficulty: 'medium', dueDate: past },
    { title: 'Four Sum', url: 'lmao', difficulty: 'hard', dueDate: future },
  ];
  return (
    <>
      <Title ta="center">Neetcode 150</Title>
      <QuestionTable data={test} />
    </>
  );
}
