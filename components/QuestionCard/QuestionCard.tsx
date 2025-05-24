import { Anchor, Grid, GridCol } from '@mantine/core';
import { ReviewIndicator } from '../ReviewIndicator/ReviewIndicator';

interface QuestionCardProps {
  title: string;
  url: string;
  dueDate?: Date;
}

export function QuestionCard(props: QuestionCardProps) {
  return (
    <Grid>
      <GridCol span={4}>
        <ReviewIndicator dueDate={props.dueDate} />
      </GridCol>
      <GridCol span={4}>
        <Anchor href={props.url} size="xl">
          {props.title}
        </Anchor>
      </GridCol>
    </Grid>
  );
}
