'use client';

import { IconEdit } from '@tabler/icons-react';
import sortBy from 'lodash/sortBy';
import { DataTable, DataTableSortStatus } from 'mantine-datatable';
import { ActionIcon, Anchor, Button, Center, Group, Modal, Text } from '@mantine/core';
import { Difficulty, DifficultyVariant } from '../Difficulty/Difficulty';
import { ReviewIndicator } from '../ReviewIndicator/ReviewIndicator';

import 'mantine-datatable/styles.layer.css';

import { useEffect, useState } from 'react';
import { useDisclosure } from '@mantine/hooks';
import { createNewCard } from '@/app/lib/anki';

export interface QuestionRowProps {
  id: string;
  title: string;
  url: string;
  dueDate?: Date;
  difficulty: DifficultyVariant;
}

interface QuestionTableProps {
  data: QuestionRowProps[];
}

export function QuestionTable(props: QuestionTableProps) {
  const [sortStatus, setSortStatus] = useState<DataTableSortStatus>({
    columnAccessor: '',
    direction: 'asc',
  });
  const [records, setRecords] = useState<QuestionRowProps[]>(props.data);
  const [opened, { open, close }] = useDisclosure(false);
  const [problemId, setProblemId] = useState('');
  const handleOpenModal = (id: string) => {
    console.log('id: ' + id);
    if (id === '1') {
      // create a new card to use
      createNewCard();
    }
    // set problemId
    setProblemId('100');
    return open;
  };

  const handleRating = () => {};

  useEffect(() => {
    const data: QuestionRowProps[] = sortBy(props.data, sortStatus.columnAccessor);
    setRecords(sortStatus.direction === 'desc' ? data.reverse() : data);
  }, [sortStatus]);

  return (
    <>
      <DataTable
        withTableBorder
        borderRadius="sm"
        withColumnBorders
        verticalAlign="center"
        records={records}
        columns={[
          {
            accessor: 'dueDate',
            title: 'Review Status',
            width: 80,
            sortable: true,
            render: ({ dueDate }) => <ReviewIndicator dueDate={dueDate} />,
          },
          {
            accessor: 'title',
            title: 'Problem',
            width: 500,
            sortable: true,
            render: ({ title, url }) => (
              <Anchor href={url} size="xl">
                {title}
              </Anchor>
            ),
          },
          {
            accessor: 'difficulty',
            title: 'Difficulty',
            width: 100,
            sortable: true,
            render: ({ difficulty }) => <Difficulty variant={difficulty} />,
          },
          {
            accessor: 'id',
            title: 'Actions',
            width: 50,
            sortable: false,
            render: ({ id }) => (
              <Center>
                <ActionIcon onClick={() => handleOpenModal(id)}>
                  <IconEdit />
                </ActionIcon>
              </Center>
            ),
          },
        ]}
        sortStatus={sortStatus}
        onSortStatusChange={setSortStatus}
      />
      <Modal opened={opened} onClose={close} title="Review">
        <Group>
          <Text>Due Date: </Text>
        </Group>
        <Group>
          <Button onClick={handleRating}>Again</Button>
          <Button>Hard</Button>
          <Button>Good</Button>
          <Button>Easy</Button>
        </Group>
      </Modal>
    </>
  );
}
