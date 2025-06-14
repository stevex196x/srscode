'use client';

import { Button, Title } from '@mantine/core';
import { Neetcode } from '@/components/QuestionTable/data/Neetcode';
import { QuestionRowProps, QuestionTable } from '@/components/QuestionTable/QuestionTable';

export default function HomePage() {
  const neetcodeProblems: QuestionRowProps[] = Neetcode();
  return (
    <>
      <Title ta="center">Neetcode 150</Title>
      <QuestionTable data={neetcodeProblems} />
    </>
  );
}
