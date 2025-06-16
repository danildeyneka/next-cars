import { CarsResponse, Sorter } from '@/features/CarsList/types';
import { BASE_URL } from '@/shared/api/const';

export const BASE_LIMIT = 12;

export async function getCars(sort?: Sorter, page?: string) {
  const res = await fetch(
    `${BASE_URL}/cars?_limit=${BASE_LIMIT}${sort ? '&_sort=' + sort : ''}${page ? '&_page=' + page : ''}`,
  );

  return (await res.json()) as CarsResponse;
}
