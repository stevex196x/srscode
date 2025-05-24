'use client';

import { Badge } from '@mantine/core';

interface ReviewIndicatorProps {
  dueDate?: Date;
}

export function ReviewIndicator(props: ReviewIndicatorProps) {
  const now = new Date();
  if (props.dueDate == null) {
    return <></>;
  } else if (now < props.dueDate) {
    return (
      <Badge variant="outline" color="green">
        OK
      </Badge>
    );
  }
  return (
    <Badge variant="outline" color="red">
      Review
    </Badge>
  );
}
