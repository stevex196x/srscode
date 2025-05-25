'use client';

import sortBy from 'lodash/sortBy';
import { DataTable, DataTableSortStatus } from 'mantine-datatable';
import { Anchor } from '@mantine/core';
import { Difficulty, DifficultyVariant } from '../Difficulty/Difficulty';
import { ReviewIndicator } from '../ReviewIndicator/ReviewIndicator';

import 'mantine-datatable/styles.layer.css';

import { useEffect, useState } from 'react';

export interface QuestionRowProps {
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

  useEffect(() => {
    const data: QuestionRowProps[] = sortBy(props.data, sortStatus.columnAccessor);
    setRecords(sortStatus.direction === 'desc' ? data.reverse() : data);
  }, [sortStatus]);

  return (
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
          width: 100,
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
      ]}
      sortStatus={sortStatus}
      onSortStatusChange={setSortStatus}
    />
  );
}
