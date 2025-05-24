import { Grid, Text } from '@mantine/core';

interface QuestionCardProps {
  title: string;
}

export function QuestionCard(props: QuestionCardProps) {
  return (
    <Grid>
      <Text size="xl">{props.title}</Text>
    </Grid>
  );
}
