import { Text } from '@mantine/core';

export type DifficultyVariant = 'easy' | 'medium' | 'hard';

interface DifficultyProps {
  variant: DifficultyVariant;
}

export function Difficulty(props: DifficultyProps) {
  if (props.variant === 'easy') {
    return <Text c="green">EASY</Text>;
  } else if (props.variant === 'medium') {
    return <Text c="orange">MEDIUM</Text>;
  }
  return <Text c="red">HARD</Text>;
}
