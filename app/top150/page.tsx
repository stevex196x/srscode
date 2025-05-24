import { Title } from '@mantine/core';
import { Neetcode } from '@/components/Neetcode/Neetcode';
import { QuestionCard } from '@/components/QuestionCard/QuestionCard';

// import { Neetcode } from '@/components/Neetcode/Neetcode';
// import { QuestionCard } from '@/components/QuestionCard/QuestionCard';

export default function HomePage() {
  const test = <QuestionCard title="Test" url="test" />;

  return (
    <>
      <Title>Neetcode 150</Title>
      <Neetcode questionCards={[test, test]} />
    </>
  );
}
