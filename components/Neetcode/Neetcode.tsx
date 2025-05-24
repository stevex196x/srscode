import { SimpleGrid } from '@mantine/core';

interface NeetcodeProps {
  questionCards: React.ReactNode[];
}

export function Neetcode(props: NeetcodeProps) {
  return (
    <>
      <SimpleGrid cols={1} verticalSpacing="sm">
        {props.questionCards}
      </SimpleGrid>
    </>
  );
}
