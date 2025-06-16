import { Car, Sorter } from '@/features/CarsList/types';

export function sorter(a: Car, b: Car, sort: Sorter) {
  switch (sort) {
    case 'asc':
      return a.price - b.price;
    case 'desc':
      return b.price - a.price;
    case ' ':
      return 1;
  }
}
