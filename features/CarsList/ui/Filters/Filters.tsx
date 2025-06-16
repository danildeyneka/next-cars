'use client';
import { PaginationWithLinks } from '@/components/ui/pagination-with-links';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { BASE_LIMIT } from '@/features/CarsList/api/cars';
import { Sorter } from '@/features/CarsList/types';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { FC, useState } from 'react';

type Props = {
  sort: Sorter;
  page: string;
  totalItems: number;
};

export const Filters: FC<Props> = ({ sort, page, totalItems }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [sorter, setSorter] = useState<Sorter>(sort || ' ');

  const handleSorter = (sortingValue: Sorter) => {
    setSorter(sortingValue);
    const params = new URLSearchParams(searchParams);

    if (sortingValue === ' ') {
      params.delete('sort');
    } else {
      params.set('sort', sortingValue);
    }

    router.push('?' + params);
  };

  return (
    <div className='flex gap-8 lg:gap-3 flex-col lg:flex-row spase-between'>
      <Select value={sorter} onValueChange={handleSorter}>
        <SelectTrigger className='w-1/2 m-auto lg:w-[600px] lg:ml-[5%]'>
          <SelectValue placeholder='Сортировка' />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value=' '>Не выбрана</SelectItem>
          <SelectItem value='asc'>По возрастанию</SelectItem>
          <SelectItem value='desc'>По убыванию</SelectItem>
        </SelectContent>
      </Select>

      <PaginationWithLinks
        page={+page || 1}
        pageSize={BASE_LIMIT}
        totalCount={totalItems}
      />
    </div>
  );
};
